import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomebannerComponent } from './homebanner/homebanner.component';
import { DoorsliderComponent } from './doorslider/doorslider.component';
import { WebsiteintroComponent } from './websiteintro/websiteintro.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [HomebannerComponent, DoorsliderComponent, WebsiteintroComponent, MainpageComponent ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})

/* Home Module to load Home page component and its internal dependent components */
export class HomeModule { }
