import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    availability:boolean
    // Add more properties as needed
  }
@Component({
    selector: 'product-card',
    standalone: true,
    template: `
    <div class="grid w-full mt-10 gap-4 items-center 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">


  @for(product of products ; track $index){
    <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover items-center w-full" [src]="product?.image" alt="product image" />
    <span *ngIf="product.availability"
  class="absolute top-0 left-0 m-2 rounded-full bg-green-500 px-2 text-center text-sm font-medium text-white">
  On Hand
</span>
<span *ngIf="!product.availability"
  class="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white">
  Available to Order
</span>

  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">{{ product?.name }}</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">{{ product?.price }}</span>
        <!-- <span class="text-sm text-slate-900 line-through">{{ product?.oldPrice }}</span> -->
      </p>
      <div class="flex items-center">
        <svg  *ngFor="let star of [1, 2, 3, 4, 5]; let i = index" aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
    
        <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
      </div>
    </div>
    <a href="https://t.me/it_girl_online_shopping" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Purchase</a
    >
  </div>
</div>
  }
  </div>

  
  `,
    imports: [NgFor,NgIf],
    providers:[HttpClient]
})

export class ProductCardComponent implements OnInit {
    products: any
    constructor(private http: HttpClient) { }

    ngOnInit() {
     this.http.get('/assets/product.json').subscribe(data =>{
        this.products = data
     })
      console.log(this.products,'products')
   
     }
}