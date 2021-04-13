import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface/bdz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0 }
    
  // @Output() onNuevoPersonaje:  EventEmitter<Personaje>= new EventEmitter();

  constructor (private dbzServices: DbzService){
  }
  agregar(){
    if(this.nuevo.nombre.trim().length=== 0){
      return;
    }
    this.dbzServices.agregarPersona(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo ={
      nombre:'',
      poder:0
    }
  }
}
