import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {}
