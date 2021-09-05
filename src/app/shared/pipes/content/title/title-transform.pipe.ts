import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { Dresses } from 'src/app/shared/classes/dresses';

@Pipe({
  name: 'titleTransform',
  pure: false
})
export class TitleTransformPipe implements PipeTransform {

  transform(value:Dresses[]): any {
    let result = value;

    result.forEach((el: { title: string; }) => {
        let names = el.title.trim().split(' ');
        if (names.length <= 1) {
          if (names.length == 0) {
            el.title = '';
          } else {
            let firstName = names[0];
            el.title = firstName;
          }

        } else {
          let firstName = names[0].slice(0, 1);
          let transformNames = firstName + '. ' + names[1];
          el.title = transformNames;
        }
      })
      return result;
  }

}