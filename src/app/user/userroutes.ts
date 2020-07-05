import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

/* Routing to load all User specific Components with Lazy Loading */
export const UserRoutes: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent },
]