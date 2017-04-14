import { Component } from '@angular/core';
import { qtService } from '../services/qtrack.service';









@Component({

    selector: 'navbar',
    // providers: [qtService,HTTP_PROVIDERS],
    template: `
 <div class="horizontalsplit">

     <div class="buttonbar">
     <div 
     id = "clientname" (mouseover)="qtService.showtooltip($event)" (dblclick)="qtService.toggle_tooltip()" style="cursor:auto">
     <span> {{qtService.user.naam_plaats}}</span> <span style="font-size: 40%;">{{qtService.dbname}} </span>
     <div class="dropdown">
     <span id="help" class="dropbtn">help</span>
     <div class="dropdown-content">
    <p (click)="qtService.help('algemeen')">Link 1</p>
    <p (click)="qtService.help('tooltiptoggle')">Link 2</p>
    <p href="#">Link 3</p>
  </div>
  </div>
  </div>
     </div>  
        <div class="buttonbar" >
        <div>
         <button id="clear"      type="button" [disabled] ="qtService.disable_clear"  class="btn btn-custom " (click)="qtService.clearrequest()" (mouseover)="qtService.showtooltip($event)"><span class="fa fa-remove"></span>Nieuw</button>
        <button id="search" type="button" [disabled] ="qtService.disable_search" class="btn btn-custom " (click)="search()" (mouseover)="qtService.showtooltip($event)"><span class="fa fa-search"></span>Zoek</button>
  
       
        <button id="save" type="submit" class="btn btn-custom" (click)="qtService.savetx()" 
              [disabled] ="qtService.disable_save"><span (mouseover)="qtService.SaveBtnMsg()" (mouseleave)="qtService.CloseBtnMsg()" 
              class="fa fa-floppy-o"></span> <span (mouseover)="qtService.SaveBtnMsg()" (mouseleave)="qtService.CloseBtnMsg()">Bewaar</span></button>
    
      
        <button id="first" type="button" class="btn btn-custom" (click)="move(0)" (mouseover)="qtService.showtooltip($event)"  [disabled] ="qtService.disable_moveFirst">   <span class="fa fa-fast-backward"></span>Eerste</button>
        <button id="previous" type="button" class="btn btn-custom" (click)="move(-1)" (mouseover)="qtService.showtooltip($event)" [disabled] ="qtService.disable_movePrevious">  <span class="fa fa-step-backward"></span>Vorige</button>
        <button id="next" type="button" class="btn btn-custom" (click)="move(1)" (mouseover)="qtService.showtooltip($event)" [disabled] ="qtService.disable_moveNext">   <span class="fa fa-step-forward"></span>Volgende</button>
        <button id="last" type="button" class="btn btn-custom" (click)="move(9999)" (mouseover)="qtService.showtooltip($event)" [disabled] ="qtService.disable_moveEnd"><span class="fa fa-fast-forward"></span>Laatste</button>
       
       <button  type="submit" class="btn btn-custom" (click)="qtService.Excel()" [disabled] ="!qtService.bSummy">
              <span id="excel" (mouseover)="qtService.showtooltip($event)"  
              class="fa fa-floppy-o"></span> <span id="excel" (mouseover)="qtService.showtooltip($event)" >Excel</span></button>
        </div>  
        </div>
                
    <div>
    `


})

//  <button type="button" class="btn btn-custom" (click)="tabel()"  [disabled] ="qtService.disable_tabel">   <span class="fa fa-table"></span>Tabel</button>
//  <button type="button" class="btn btn-custom" (click)="qtService.copy()"   [disabled] = "qtService.disable_copy">    <span class="fa fa-files-o"></span>Copy</button>

export class navbar {

    msg = [];
    qtService;
    constructor(private _qtService: qtService) {

        this.qtService = _qtService;
    }


    move(direction) { this.qtService.moverequest(direction); }
    clear() {
        this.qtService.clear();
    }
    search() {
        this.qtService.search()
    }

}