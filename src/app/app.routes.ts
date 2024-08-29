import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContattiComponent } from './contatti/contatti.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Bero Illustration - Home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Bero Illustration - Portfolio',
  },
  {
    path: 'contatti',
    component: ContattiComponent,
    title: 'Bero Illustration - Contatti',
  },
];
