import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.module').then((m) => m.CalendarModule),
  },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
];
