import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ConsultActivite } from './consult-activite/consult-activite';

export const routes: Routes = [
  { path: '', component: Home, title: 'Accueil' },
  { path: 'index.html', component: Home, title: 'Accueil' },
  { path: 'about', component: About, title: 'À propos' },
  { path: 'consultAct', component: ConsultActivite, title: 'Consultation activité' },
  { path: 'consultAct/:id', component: ConsultActivite, title: 'Consultation activité' },
  { path: 'consultAct/:id/:secondId', component: ConsultActivite, title: 'Consultation activité' },
  { path: '**', redirectTo: '' },
];
