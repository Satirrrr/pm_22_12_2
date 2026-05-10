import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./app-resume/app-resume').then(m => m.AppResumeComponent),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'resume'
  }
];
