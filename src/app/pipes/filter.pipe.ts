import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name : 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any , filterString :string, propName : string ) {

        if(value.lenght=== 0 || filterString ===''){
            return value;
        }
        const resultArray = [];
        for(const item of value){
    
            if(item[propName]===filterString){
                resultArray.push(item);
            }
        }
        return  resultArray;
    } 
}