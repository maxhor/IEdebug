import { Component, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';


import { qtService } from '../services/qtrack.service';

//import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';

@Component({

    selector: 'kop-info',
    // providers: [qtService,HTTP_PROVIDERS],
    template: ` 
  

  <form [formGroup] = "qtService.kopForm" >
 <div   class="contentcontainer" >
 <div class="horizontalsplit" >


 <div class="onecol col-sm-4 col-md-3" *ngFor = " let ibtc=index let btc of qtService.visible_fields"> 
 
 <div *ngFor = "let ifield=index let field of btc"  > 
 

<div *ngIf="field.type=='text' || field.type=='number' ||field.type=='date'||field.type=='decimal' ||field.type=='checkbox' " [hidden] = "qtService.hidden[field.name]">

  <label htmlFor="{{field.name}}">{{field.title}}</label>
  <input  [style.width]="field.width" [formControlName]="field.name"  (change) ="qtService.Changed($event)" #allfields [class.autofocus]="field.getsfocus" 
          [type]="field.type"  (click) ="test(ctrl)" [class.dtcolm] = "qtService.bLoggedIn"
          id="{{field.name}}"  (mouseover)="qtService.showtooltip($event)" 
                   (mouseleave)="qtService.hidetooltip()" 
          class="inputtext">
  </div>

  <div *ngIf="field.type =='listbox'" class="autoComplete" [hidden] = "qtService.hidden[field.name]" >
  <label htmlFor="{{field.name}}">{{field.title}}</label>
   
  <p-autoComplete   [suggestions]="qtService.autocomplete_list[field.lbcount]" (completeMethod)="qtService.filtercustomer(field.lbcount,$event)" 
                   [minLength]="1"   (dblclick)="qtService.InputfieldIsDBLClicked($event)" (mouseover)="qtService.showtooltip($event)" 
                   (mouseleave)="qtService.hidetooltip()" 
                    [formControlName]="field.name"   id="{{field.name}}"  (change) ="qtService.Changed($event)"
                     (onSelect)="qtService.cust_add($event,field.lbcount)"  

                     >
                     
  </p-autoComplete>

  
  
  </div>

    <div *ngIf="field.type =='dropdown'" [hidden]="qtService.bHideAfleverAdres" >
<label htmlFor="{{field.name}}">{{field.title}}</label>


<select #thisfield [style.width]="field.width" [formControlName]="field.name"   (dblclick)="qtService.InputfieldIsDBLClicked($event)"   
        (mouseleave)="qtService.hidetooltip()" (change) ="qtService.populate_adrespopup(thisfield.value)" id="{{field.name}}" 
          class="inputtext">
           <option  *ngFor = "let value of qtService.dropdownlist_adres" [selected]="qtService.dropdown_selected(thisfield,value)">{{value}}</option>
 
</select>


</div>

<div *ngIf="field.type =='textarea'"  >
<label htmlFor="{{field.name}}" style="margin-left:40%;">{{field.title}}  </label>
<textarea [formControlName]="field.name" (change) ="qtService.Changed($event)"></textarea>
</div>

 
  </div>
 
  </div>
  
   <p class = "inlinemsg">{{qtService.sBevestigdMessage}}</p>
  </div>

  <div class="mytooltip" [hidden]="qtService.bToolTipHide"  [style.top]="qtService.tttop" [style.left]="qtService.ttleft">{{qtService.sToolTip}}</div>
  </div>

      
  </form>
  

 
    `,


})


export class kopcomponent implements AfterViewInit {

    @ViewChildren('allfields')
    allfields: QueryList<HTMLElement>;
    qtService = {};

    constructor(private _qtService: qtService) {

        this.qtService = _qtService;

    }

    test() {
        var i = 1;
    }
    ngAfterViewInit() {

        // this.qtService.formBuilt.subscribe(function(){let i = 1;})
        this.allfields.changes.subscribe(() => {

            this.qtService["dom_elements"] = this.allfields;
        })
        // this.qtService.formBuilt.subscribe(function (value)

        // { this.qtService.dom_elements = this.allfields; }
        // );
    }

    copyDOM() {
        this.qtService["dom_elements"] = this.allfields;
    }




}
