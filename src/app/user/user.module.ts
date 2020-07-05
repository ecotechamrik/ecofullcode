import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './userroutes';



@NgModule({
  declarations: [RegistrationComponent, ForgotpasswordComponent, ChangepasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
