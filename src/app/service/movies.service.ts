import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey:string = "1462c3d2c13024235a9a2b7bd0d0e4ae";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  constructor(private http:HttpClient) {   }
  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url,"callback=JSONP_CALLBACK" );
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return  this.http.jsonp( url,"callback=JSONP_CALLBACK" );
  }
}
