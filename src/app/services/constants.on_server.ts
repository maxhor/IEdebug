import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';

@Injectable()
export class ServerConstants {
  rooturl = 'http://localhost:53823/';
  loginurl = 'http://localhost:53823/';
  is_production = false;
  headers = new Headers();
  constructor() { 
    

        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        this.headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if(this.is_production){
            this.loginurl="login/";
        }
  }

}
