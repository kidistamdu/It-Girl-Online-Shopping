import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { AuthService } from '../../../shared/service/auth/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'log-in',
    standalone:true,
    template: `<!-- component -->
    <div class="bg-gray-100 flex justify-center items-center h-screen">
        <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img src="/assets/logo.png" alt="Logo Image" class="object-cover w-full h-full">
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>
      <form action="#" method="POST" [formGroup]="logIn" >
        <!-- Username Input -->
        <div class="mb-4">
          <label for="username" class="block text-gray-600">Email</label>
          <input type="text" id="username" name="username" formControlName="email" class="w-full border  border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Password</label>
          <input type="password" id="password" name="password" formControlName="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
        </div>
        <!-- Remember Me Checkbox -->
        <div class="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" class="text-blue-500">
          <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
        </div>
        <!-- Forgot Password Link -->
        <div class="mb-6 text-blue-500">
          <a href="#" class="hover:underline">Forgot Password?</a>
        </div>
        <!-- Login Button -->
        <button *ngIf="!isLogIn"  type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"  (click)="emailPasswordLogIn()">Login</button>
        <button *ngIf="isLogIn" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" >
          <mat-progress-spinner color="accent" diameter="20"></mat-progress-spinner>
        </button>
      </form>
      <!-- Sign up  Link -->
      <div class="mt-6 text-blue-500 text-center">
        <a href="/auth/register" class="hover:underline">Register Here</a>
      </div>
    </div>
    </div>`,
    imports:[ReactiveFormsModule,CommonModule,MatProgressSpinnerModule]
})

export class LogInComponent implements OnInit {
  isLogIn = false
  private router = inject(Router)
  private authService = inject(AuthService)
  logIn = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
    constructor() { }
  
      async emailPasswordLogIn() {
        if (!this.logIn.valid) return
        const { email, password } = this.logIn.value as { email: string; password: string }
        await this.authService.emailPasswordLogIn({ email, password })
        this.router.navigate(['/welcome'])
      }
    
    ngOnInit() { }
}