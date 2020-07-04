import { Route } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';

export const StaticRoutes: Route[] = [
    { path: 'services', component: ServicesComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'privacypolicy', component: PrivacypolicyComponent },
    { path: 'termsconditions', component: TermsconditionsComponent }
]