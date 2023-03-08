import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscaComponent } from './components/busca/busca.component';

const routes: Routes = [
  {path:'home/:buscar',component:HomeComponent},
  {path:'busca/:buscar',component:BuscaComponent},
  {path:'**',pathMatch:'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
