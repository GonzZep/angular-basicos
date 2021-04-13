import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/bdz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[]=[];
  get personajes(){
    return this.dbzServices.personajes;
  }

  constructor(private dbzServices: DbzService){

  }

}
