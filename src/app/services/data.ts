import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Personaje {
	id: number;
	name: string;
	image: string;
}

interface RespuestaPersonajes {
	results: Personaje[];
}

@Injectable({
	providedIn: 'root'
})
export class Personajes {
	private readonly url = 'https://rickandmortyapi.com/api/character';

	constructor(private readonly http: HttpClient) {}

	getPersonajes(): Observable<RespuestaPersonajes> {
		return this.http.get<RespuestaPersonajes>(this.url);
	}
}
