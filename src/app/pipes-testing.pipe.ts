import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesTesting'
})

export class PipesTestingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    console.log('EL VALOR QE ENVIO ES = ' + value)

    return value;
  }

}
