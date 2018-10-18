import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name : 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value: any ) {
        return value.substr(0, 6);
    }
         /*  Parametrizing Pipe */
/*     transform(value: any ) {
        if ( value.lenght > 10) {
            return value.substr(0, 10) + '........';
        }
        return value;
    } */

 /*        transform(value: any , limit: number) {
        if ( value.lenght > limit) {
            return value.substr(0, limit) ;
        }
        return value;
    } */
}
