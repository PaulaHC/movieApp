import { Component } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {
  
  constructor(public _ps:MoviesService){}
  buscarpelicula(){
   /* if(this.search.length==0)return;
    this._ps.buscarPelicula(this.search).subscribe();*/
  }
}
