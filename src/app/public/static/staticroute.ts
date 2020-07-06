import { Route } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { CopyrightComponent } from './copyright/copyright.component';

/* Routing to load Static Pages with Lazy Loading */
export const StaticRoutes: Route[] = [
    { path: 'services', component: ServicesComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'privacypolicy', component: PrivacypolicyComponent },
    { path: 'termsconditions', component: TermsconditionsComponent },
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: 'copyright', component: CopyrightComponent }
]