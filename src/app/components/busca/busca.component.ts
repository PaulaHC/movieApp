import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
  peliculas: any;
  buscar: any;
  constructor(private _rou:ActivatedRoute,public _ps:MoviesService){

    this._rou.params.subscribe((parametros:any)=>{
      this.buscar=parametros;
      console.log(parametros);
    });
    this._ps.buscarPelicula(this.buscar).subscribe((data:any)=>this.peliculas=data);
  }

}
