import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routes } from './routetable';
import { PageNotfoundComponent } from './public/pagenotfound/pagenotfound.component';
import { HomeModule } from './public/home/home.module';
import { MenuComponent } from './public/menu/menu.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotfoundComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(Routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
