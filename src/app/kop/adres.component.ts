import { Component, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';


import { qtService } from '../services/qtrack.service';

//import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';

@Component({

    selector: 'adres-info',
    // providers: [qtService,HTTP_PROVIDERS],
    template: ` 
   
  <div class="w3-container w3-teal overlay"  [style.cursor]="qtService.cursorShape">
  <h1 class="header">{{qtService.adresheader}}</h1>
 <br>

  <form [formGroup] = "qtService.adresForm" >
 <div   class="qcontentcontainer " >
 


 <div class="width6col " *ngFor = " let ibtc=index let btc of qtService.visible_klantfields"> 
 
 <div *ngFor = "let ifield=index let field of btc"  > 

 <div >
  <label htmlFor="{{field.name}}">{{field.name}}</label>
  <input [style.width]="field.width" [formControlName]="field.name"  (change) ="qtService.Changed($event)" #allfields  
          [type]="field.type"   id="{{field.name}}" class="qinputtext">
  </div>


 
  </div>
 
  </div>
 
  
  
  
 <div style="text-align: center;">
	

			
			<span ><button id="error" type="button" style="margin-top:4%;" pButton icon="fa-min" (click)="qtService.HideMessage()" label="Ok"></button></span>
		
		
		</div>
  
  </div>

      
  </form>
  

 </div>
    `,


})


export class adrescomponent  {
    qtService = {};

    constructor(private _qtService: qtService) {

        this.qtService = _qtService;

    }


}
