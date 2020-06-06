import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ApplicationComponent } from './components/application/application.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'application', component: ApplicationComponent},
	{path: '**', component: ErrorComponent}
];

//exportar config de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //llama al router module y carga la config de rutas en el router de angular y hace que funciones
