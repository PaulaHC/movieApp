import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MoviesService } from './service/movies.service';
import { MoviePipe } from './pipes/movie.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    NabvarComponent,
    MoviePipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [
    MoviesService,
    NgModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
