import { Route } from '@angular/router';
import { MainpageComponent } from './public/home/mainpage/mainpage.component';
import { PageNotfoundComponent } from './public/pagenotfound/pagenotfound.component';

export const Routes: Route[] = [
    { path: '', component: MainpageComponent },
    { path: 'static', loadChildren: () => import('./public/static/static.module').then(m => m.StaticModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: '404', component: PageNotfoundComponent },
    { path: '**', redirectTo: '404' }
]