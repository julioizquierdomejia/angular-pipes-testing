import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrder'
})
export class FilterOrdePipe implements PipeTransform {

  transform(values: string[], arg:string): string[] {

    if(!arg) return values;
    
    let resultado: string[] = [];

    for(const value of values){
      if(value.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultado = [...resultado, value]
      }
    }

    return resultado;

    /*
    if(!arg) return values;

    let resultado: string[] = [];
    for(const value of values){
      if(value.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultado = [...resultado, value]
      }
    }

    return resultado;
    */

    
    
  }

}

