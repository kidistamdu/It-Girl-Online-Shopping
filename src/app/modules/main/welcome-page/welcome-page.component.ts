import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../component/nav-bar.component';
import { ProductCardComponent } from '../component/product-card.component';
import { FooterComponent } from '../component/footer.component';

@Component({
  selector: 'welcome-page',
  standalone: true,
  template: `<div><nav-bar>

  </nav-bar><product-card>

  </product-card><footer></footer></div>`,
  imports: [NavBarComponent, ProductCardComponent,FooterComponent],
})
export class WelcomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
