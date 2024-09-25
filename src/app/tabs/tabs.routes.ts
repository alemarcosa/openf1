import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab2/:idMeeting',
        loadComponent: () => import('../shared/details/details.page').then((m) => m.DetailsPage),
      },
      {
        path: 'tab2/:idMeeting/sessions/:idSession',
        loadComponent: () => import('../shared/session-details/session-details.component').then((m) => m.SessionDetailsComponent),
      },
      {
        path: 'tab3/weather',
        loadComponent: () =>
          import('../shared/weather-details/weather-details.component').then((m) => m.WeatherDetailsComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
