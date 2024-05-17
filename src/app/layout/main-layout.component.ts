import { Component, OnInit } from '@angular/core';
import { WelcomePageComponent } from "../modules/main/welcome-page/welcome-page.component";

@Component({
    selector: 'main-layout',
    standalone: true,
    template: `<welcome-page></welcome-page>`,
    imports: [WelcomePageComponent]
})

export class MainLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}