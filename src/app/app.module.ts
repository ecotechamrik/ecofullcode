import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routes } from './routetable';
import { NotfoundComponent } from './public/notfound/notfound.component';
import { HomeModule } from './public/home/home.module';
import { MenuComponent } from './public/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
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
