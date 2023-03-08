import { Component } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartelera: any;
  populares: any;
  popularesChild: any;
  constructor(public _ps:MoviesService){
    //Release movies on billboards
    this._ps.getPCartelera().subscribe((data:any)=>{this.cartelera=data;console.log(data);});
    this._ps.getPopulares().subscribe((data:any)=>{this.populares=data;console.log(data);});
    this._ps.getPopularesChild().subscribe((data:any)=>{this.popularesChild=data;console.log(data);});
  }
}
