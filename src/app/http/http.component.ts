import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
 
  constructor(private serverService : ServerService) { }

  ngOnInit() {
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave () {
    this.serverService.store(this.servers).
    subscribe( (response) => console.log(response),
    (error)=> console.log(error)
    )
  }


  onGetServer() {
    this.serverService.getServer()
    .subscribe( ( response : Response )=> {
      const  data =response.json();
       console.log(response);
    },
    (error) => console.log(error))
    }
}
