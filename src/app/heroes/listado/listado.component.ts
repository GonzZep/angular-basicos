import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.componet';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['SpiderMan','Iroman','Capitan','Hulk','Wuanda'];
  heroeBorrado: string  = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift()||'';

     
    // this.heroes.pop();
    // console.log('Borrando...');    
  }
}


