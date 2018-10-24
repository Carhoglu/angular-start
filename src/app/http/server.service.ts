import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  store(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    /*     return this.http.post('https://angular-udemy-http-ca329.firebaseio.com/data.json',servers,{ headers: headers}); */
    return this.http.put('https://angular-udemy-http-ca329.firebaseio.com/data.json', servers, { headers: headers });

  }

  getServer() {
    /*  return this.http.get('https://angular-udemy-http-ca329.firebaseio.com/data.json'); */
    
  /*          return this.http.get('https://angular-udemy-http-ca329.firebaseio.com/data.json')
           .map(
              (response: Response) => {
                const data = response.json();
                for(const server of data) {
                  server.name = 'Fethed '+ server.name;
                }
                return data;        //returned data 
              }
            );
            } */
    // Error  Handling  catch
            return this.http.get('https://angular-udemy-http-ca329.firebaseio.com/data.json')
              .map(
                (response: Response) => {
                  const data = response.json();
                  for (const server of data) {
                    server.name = 'Fethed ' + server.name;
                  }
                  return data;
                }
              )
              .catch((error: Response) => {
                console.log(error);
                return Observable.throw('Error json');
              });
      }
    
 // Async Pipe with 
  getAppName() {
    return this.http.get('https://angular-udemy-http-ca329.firebaseio.com/data/appName.json')
      .map((response: Response) => {
        return response.json();
      }
      );
  }
 

}