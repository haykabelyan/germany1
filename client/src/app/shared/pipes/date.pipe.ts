import { Pipe, PipeTransform } from '@angular/core';
​
@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
​
​
  transform(value: any, ...args: any[]): any {
  ​
    let date = ( new Date(args[0]).getTime() - args[1])/(1000*60*60*24)
​
  if(date <= 10 && date > 5){
    return 'rgba(179,142,61,0.42)'
  }
  else if(date <= 5 && date > 2){
    return 'rgba(197,76,26,0.58)'
  }
  else if(date <= 2){
    return 'rgba(177,9,10,0.79)'
  }
​    else return 'CCC6C6'
  }
​
  
}
