import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./homepage/components/homepage/homepage.component').then(
        (m) => m.HomepageComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/components/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];
