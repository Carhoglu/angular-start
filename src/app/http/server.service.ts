import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ServerService {
   constructor(private http : Http) {
   }
  
   store(servers : any []) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://angular-udemy-http-ca329.firebaseio.com/data.json',servers,{ headers: headers});
   }
  
  
}