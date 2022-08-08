import { Pipe, PipeTransform } from '@angular/core';
import { ICat } from '../models/cat';


@Pipe({
  name: 'filterBreeds'
})
export class FilterBreedsPipe implements PipeTransform {

  transform(cats:ICat[], search:string): ICat[] {
     if(search.length === 0) return cats
    return cats.filter(b => b.breeds[0].name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }
 
}

