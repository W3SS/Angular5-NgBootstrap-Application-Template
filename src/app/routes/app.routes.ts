import { Routes, RouterModule } from '@angular/router';

// Views
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { ErrorComponent } from '../views/error/error.component';
import { UnauthorizedComponent } from '../views/unauthorized/unauthorized.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'unauthorized', component: UnauthorizedComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
