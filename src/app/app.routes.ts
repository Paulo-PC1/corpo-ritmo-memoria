import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', title: 'Corpo, Ritmo e Memória', component: HomeComponent },
  {
    path: 'mind-fit-club',
    title: 'Mind Fit Club',
    // carregada só quando a pessoa abre a página
    loadComponent: () => import('./components/mind-fit-club/mind-fit-club.component')
      .then(m => m.MindFitClubComponent)
  },
  { path: '**', redirectTo: '' }
];