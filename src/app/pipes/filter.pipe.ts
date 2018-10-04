import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * @param items 
   * @param value value to filter
   * @param propertiesToFilter  properties of the object to compare
   */
  transform(items: any[], value: string, propertiesToFilter: string[]): any {

    if (!items || !value) {
      return items;
    }

    return items.filter((item) => {

      var foundMatch = false;
      for (var i = 0; i < propertiesToFilter.length; i++) {
        // if found a match
        if (item[propertiesToFilter[i]] && item[propertiesToFilter[i]].toLowerCase().indexOf(value.toLowerCase()) > -1) {
          foundMatch = true;
          break;
        }
      }

      if (foundMatch) {
        return item;
      }

    });
  }

}
