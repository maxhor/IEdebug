import {Component} from '@angular/core';

import {Observable} from 'rxjs/observable';
import {qtService}  from '../services/qtrack.service';

//import {DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';



@Component({
	templateUrl: './detailsinfo.html',
	selector: 'details-info',
    
 
})



export class detailscomponent {
	qtService = {};


    
    constructor(private _qtService: qtService){
		this.qtService=_qtService;
	}

}

// <p-autoComplete [class.notcounted]="!qtService.bCounted" [suggestions]="qtService.arts" (completeMethod)="qtService.filter($event)"
// 								[minLength]="0" [dropdown]="true" (onDropdownClick)="qtService.filter('')" 
// 								[disabled]="qtService.disable_nwArtikel" (onSelect)="qtService.art_add($event)" formControlName="nwartikel">
// 							</p-autoComplete>


// <p-autoComplete  [suggestions]="qtService.arts" (completeMethod)="qtService.filter($event)"
// 				       [minLength]="0" [dropdown]="true" (onDropdownClick)="qtService.filter($event)">
//       </p-autoComplete>