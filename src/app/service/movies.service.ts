import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey:string = "1462c3d2c13024235a9a2b7bd0d0e4ae";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  
  peliculas:any[]=[];

  constructor(private http:HttpClient) {   }
  getPCartelera(){
    let desde= new Date();
    let hasta= new Date();
    hasta.setDate(hasta.getDate()+7)

    let monthD:string=`${desde.getMonth()+1}`;
    let monthH:string=`${hasta.getMonth()+1}`;
    let dayD:string=`${desde.getDate()}`;
    let dayH:string=`${hasta.getDate()}`;

    if(desde.getMonth()+1<10)monthD=`0${desde.getMonth()+1}`;
    if(hasta.getMonth()+1<10)monthH=`0${hasta.getMonth()+1}`;
    if(desde.getDate()<10)dayD=`0${desde.getDate()}`;
    if(hasta.getDate()<10)dayH=`0${hasta.getDate()}`;
    
    let desdeStr=`${desde.getFullYear()}-${monthD}-${dayD}`;
    let hastaStr=`${hasta.getFullYear()}-${monthH}-${dayH}`;
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }`;

    return this.http.jsonp( url,"callback=JSONP_CALLBACK" );
  }
  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url,"callback=JSONP_CALLBACK" );
  }
  getPopularesChild(){

    let url = `${ this.urlMoviedb }/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url,"callback=JSONP_CALLBACK" );
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return  this.http.jsonp( url,"callback=JSONP_CALLBACK" ).pipe(map((res:any)=>{
      this.peliculas=res.results;
      return res.results;
    }));
  }
}
