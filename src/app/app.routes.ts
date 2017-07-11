import { Routes } from '@angular/router';

import { MainPageComponent, CategoryComponent, NoContentComponent } from './components';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: MainPageComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    path: '**',
    component: NoContentComponent
  }
];