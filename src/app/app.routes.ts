import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [

    {
        path:'auth',
        component:AuthLayoutComponent,
        children:[
            {
                path:'log-in',
                loadChildren:() => import('./modules/auth/log-in/log-in.routes'),
            },
            {
                path:'register',
                loadChildren:() => import('./modules/auth/register/register.routes'),
            },

        ]
    },
    {
        path:'main',
        component:MainLayoutComponent,
        children:[
            {
                path:'welcome',
                loadChildren:() => import('./modules/main/welcome-page/welcome-page.routes'),
            },

        ]
    }
];
