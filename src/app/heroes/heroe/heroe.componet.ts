import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre  : string = 'Iroman';
    edad    : number =  56;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        //Propio de JavaScript
        return `${ this.nombre}-${this.edad}`
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 18;
    }
}