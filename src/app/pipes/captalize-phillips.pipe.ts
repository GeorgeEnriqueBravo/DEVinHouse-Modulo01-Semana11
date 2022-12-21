import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhillips'
})
export class CaptalizePhillipsPipe implements PipeTransform {

  // Essa função apenas retorna a primeira letra maiúscula da primeira palavra digitada no input.

  // transform(value: string, ...args: unknown[]): string {
  //   let palavra: string = value;
  //   let primeiraLetra: string = value.charAt(0).toUpperCase();

  //   palavra = primeiraLetra + palavra.substring(1, value.length)

  //   return palavra;
  // }



  // Essa segunda função retorna a primeira letra maiúscula de todas as palavras digitadas.
  transform(value: string, ...args: unknown[]): string {

    // Aqui está sendo separada cada palavra em um array de strings.
    let palavra: Array<string> = value.split(' ');

    // Aqui está sendo pega a primeira letra de cada array criado e colocado em maiúscula.
    for (var i = 0; i < palavra.length; i++) {
      palavra[i] = palavra[i].charAt(0).toUpperCase() + palavra[i].slice(1); 
    }
    
    return palavra.join(' ');
  }

}
