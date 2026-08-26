import { Component, OnInit } from '@angular/core';
import { Personaje, Personajes } from '../../services/data';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api {
  personajes: Personaje[] = [];

  constructor(private readonly servicioPersonajes: Personajes) {}

  ngOnInit(): void {
    this.servicioPersonajes.getPersonajes().subscribe((respuesta) => {
      this.personajes = respuesta.results;
    });
  }

  eliminarPersonaje(id: number): void {
    this.personajes = this.personajes.filter((personaje) => personaje.id !== id);
  }
}
