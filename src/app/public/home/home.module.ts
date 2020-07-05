import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomebannerComponent } from './homebanner/homebanner.component';
import { DoorcategoryComponent } from './doorcategory/doorcategory.component';
import { DoorsliderComponent } from './doorslider/doorslider.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [HomebannerComponent, DoorcategoryComponent, DoorsliderComponent, MainpageComponent ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
