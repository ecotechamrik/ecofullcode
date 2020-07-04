import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

export const UserRoute: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent },
]