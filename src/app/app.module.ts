import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routes } from './routetable';
import { PageNotfoundComponent } from './public/pagenotfound/pagenotfound.component';
import { HomeModule } from './public/home/home.module';
import { _MenuComponent } from './public/_menu/_menu.component';
import { _HeaderComponent } from './public/_header/_header.component';
import { _FooterComponent } from './public/_footer/_footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotfoundComponent,
    _HeaderComponent,
    _FooterComponent,
    _MenuComponent
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
