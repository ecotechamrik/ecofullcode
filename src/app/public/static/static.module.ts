import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { RouterModule } from '@angular/router';
import { StaticRoutes } from './staticroute';



@NgModule({
  declarations: [ServicesComponent, ContactusComponent, TermsconditionsComponent, PrivacypolicyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StaticRoutes)
  ]
})

/* Static Module to load Static (Informational) Pages with Lazy Loading */
export class StaticModule { }
