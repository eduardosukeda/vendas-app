import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCat'
})
export class FilterCategoriaPipe implements PipeTransform {

  transform(value: any, filtro: any): any {
    if (filtro == 'TODOS') return value;
    if (value) {
      return value.filter(elem => (elem.id_categoria === 5))
    }
  }

}
