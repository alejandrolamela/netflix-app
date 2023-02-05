import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavAppComponent } from './components/nav-app/nav-app.component';
import { HeroineAppComponent } from './components/heroine-app/heroine-app.component';
import { FilmsAppComponent } from './components/films-app/films-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAppComponent,
    HeroineAppComponent,
    FilmsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
