import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'
@Component({
    selector: 'auth-layout',
    standalone:true,
    template: `<router-outlet> </router-outlet>`,
    imports:[RouterOutlet,CommonModule]
})

export class AuthLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}