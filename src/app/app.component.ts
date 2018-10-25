import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  title = 'library';

  ngOnInit () {
   firebase.initializeApp ({
    apiKey: "AIzaSyCobM55d6B-oM4mJuCsmz55elU3xkKW_6M",
    authDomain: "angular-udemy-http-ca329.firebaseapp.com",
   })
  }

}
