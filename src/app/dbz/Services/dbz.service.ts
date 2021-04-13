import { Injectable } from "@angular/core";
import { Personaje } from '../interface/bdz.interface';

@Injectable()
export class DbzService{

   private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 14000
        }
      ];

      get personajes(): Personaje[]{
          return [...this._personajes];
      }
    

    constructor(){        
    }

    agregarPersona(personaje:Personaje){
        this._personajes.push(personaje)
    }

}