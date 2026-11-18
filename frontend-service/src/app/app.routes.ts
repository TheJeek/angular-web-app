import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

