import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../services/products-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: false,
  template: `
    <div>
      The Products Table is gonna be here
    </div>
  `,
  styles: ``,
})
export default class Products implements OnInit{
  title = inject(Title)
  productsService = inject(ProductsService)
  product = this.productsService.products$

  ngOnInit(): void {
    this.title.setTitle('Products');
    this.product.subscribe(x => console.log(x))
  }
}
