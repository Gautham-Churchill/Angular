import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'about',
        title: 'About',
        canActivate: [authGuard],
        component: AboutComponent
    },
    {
        path: 'dashboard',
        title: 'Dashboard',
        canActivate: [authGuard],
        component: DashboardComponent
    }
];
