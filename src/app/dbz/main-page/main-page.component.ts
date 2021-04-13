import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/bdz.interface';
import { DbzService } from '../Services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
  nuevo: Personaje ={
    nombre: 'Pikoro',
    poder: 80000
  }

  // get personajes(): Personaje[]{
  //   return this.dbzServices.personajes;
  // }

  // agregarNuevoPersonaje(argumento : Personaje){
  //   // this.personajes.push(argumento);
  // }
  constructor(){
  }
}
