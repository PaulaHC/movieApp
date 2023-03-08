import { Component } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartelera: any={};
  fecha = new Date();
  constructor(public _ps:MoviesService){
    this._ps.getPopulares().subscribe((data:any)=>{
      console.log(data);
      for(let mov in data['results'] ){
        let moveDate  = new Date(data['results'][mov]['release_date']).getTime();
        let diff = this.fecha.getTime() - moveDate;
        if(diff/(1000*60*60*24)<50){
          this.cartelera[mov]=data['results'][mov];
          console.log(this.cartelera)
        }
      }
      
    });

  }
}
