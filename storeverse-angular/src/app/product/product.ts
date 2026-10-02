import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
imports: [CommonModule]

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  name = 'Laptop';
  price = 50000;
  available = true;

  products = ['Laptop', 'T-Shirt', 'Sneakers'];
}