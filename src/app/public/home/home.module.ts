import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { _HomebannerComponent } from './_homebanner/_homebanner.component';
import { _WebsiteintroComponent } from './_websiteintro/_websiteintro.component';
import { _DoorsliderComponent } from './_doorslider/_doorslider.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [_HomebannerComponent, _WebsiteintroComponent, _DoorsliderComponent, MainpageComponent ],
  imports: [
    CommonModule
  ]
})

/* Home Module to load Home page component and its internal dependent components */
export class HomeModule { }
