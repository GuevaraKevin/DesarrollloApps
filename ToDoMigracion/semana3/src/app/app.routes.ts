import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./pages/home/home.page').then((module) => module.HomePage)
	},
	{
		path: 'tareas',
		loadComponent: () => import('./pages/tareas/tareas.page').then((module) => module.TareasPage)
	},
	{
		path: 'detalle/:id',
		loadComponent: () => import('./pages/detalle/detalle.page').then((module) => module.DetallePage)
	},
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', redirectTo: 'home' }
];
