import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MoviesService } from './service/movies.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
