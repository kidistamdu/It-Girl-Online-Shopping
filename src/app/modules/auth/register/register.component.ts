import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
    selector: 'register',
    standalone:true,
    template: `
    <div class="bg-gray-100 flex justify-center items-center h-screen">
        <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img src="/assets/logo.png" alt="Placeholder Image" class="object-cover w-full h-full">
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Register</h1>
      <form action="#" method="POST" [formGroup]="registerForm">
        <!-- Username Input -->
        <div class="mb-4">
          <label for="username" class="block text-gray-600">Email</label>
          <input type="email" id="email" name="email" formControlName="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Password</label>
          <input type="password" id="password" name="password"  formControlName="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
        </div>
        <!-- <div class="mb-4">
          <label for="password" class="block text-gray-600">Confirm Password</label>
          <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
        </div> -->
        <!-- Remember Me Checkbox -->
        <!-- Login Button -->
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" (click)="Register()">Register</button>
      </form>
      <!-- Sign up  Link -->
      <div class="mt-6 text-blue-500 text-center">
        <a href="/auth/log-in" class="hover:underline">LogIn</a>
      </div>
    </div>
    </div>`,
    imports:[ReactiveFormsModule]
})

export class RegisterComponent implements OnInit {
    constructor() { }
    register = false
    private authService = inject(AuthService)
    registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
    async Register(){
      if (!this.registerForm.valid) return
      const { name, email, password } = this.registerForm.value as { name: string; email: string; password: string }
      await this.authService.emailPasswordRegister({ email, password })
  
    }
    ngOnInit() { }
}