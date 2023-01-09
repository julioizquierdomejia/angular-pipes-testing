import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ciudades = ['Lima', 'Quito', 'Barcelona', 'Madrid']

  ciudad!: string;
  criterio!:string;

  add(ciudad:string){
    if(!ciudad){

    }else{
      this.ciudades.push(ciudad);
    }
    
  }

  texto1 = "juliO IZQUIERDO mejia";
  fecha = new Date();
  porcentaje = 0.48339998843;
  monto = 345.90;
}
