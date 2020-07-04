import { Route } from '@angular/router';
import { MainpageComponent } from './public/home/mainpage/mainpage.component';
import { NotfoundComponent } from './public/notfound/notfound.component';

export const Routes: Route[] = [
    { path: '', component: MainpageComponent },
    { path: 'static', loadChildren: () => import('./public/static/static.module').then(m => m.StaticModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '404' }
]