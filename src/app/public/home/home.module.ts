import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { FooterComponent } from './footer/footer.component';
import { DoorcategoryComponent } from './doorcategory/doorcategory.component';
import { DoorsliderComponent } from './doorslider/doorslider.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [HeaderComponent, HomebannerComponent, FooterComponent, DoorcategoryComponent, DoorsliderComponent, MainpageComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
