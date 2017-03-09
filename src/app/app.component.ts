import { Component,Input } from '@angular/core';
import {qtService} from './services/qtrack.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  qtService;
  
  constructor( private _qt:qtService){
    this.qtService=_qt;
  }
 

  LoggedIn(event){
  
    this.qtService.initUser_part1(event);
    var i=1;
  }

  offLineInit(email){
 
    this.qtService.offLineInit(email);
  }

  test(){
    var i = 0;
  }
  HideGallery(){
     debugger;
    this.qtService.bGallery=false;
  }

  initoverlay(p){
    debugger;
    this.qtService.Gallery=p;
  }


}
