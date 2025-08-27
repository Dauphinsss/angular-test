import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly productos = [
    { nombre: 'Paracetamol', precio: 5 },
    { nombre: 'Ibuprofeno', precio: 8 },
    { nombre: 'Aspirina', precio: 6 }
  ];
}
