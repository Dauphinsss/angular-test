import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly productos = [
    { nombre: 'Paracetamol', precio: 5 },
    { nombre: 'Ibuprofeno', precio: 8 },
    { nombre: 'Aspirina', precio: 6 }
  ];
}
