import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';

export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'country-list/:count',
        component: CountryListComponent
    },
    {
        path: 'country-details/:country',
        component: CountryDetailsComponent
    },
    {
        path: 'country-maint',
        component: CountryMaintComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: '**',
        component: DashboardComponent
    }
];
