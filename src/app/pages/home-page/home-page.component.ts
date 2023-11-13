import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
