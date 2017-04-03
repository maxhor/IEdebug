
import { Component, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';

import {Observable} from 'rxjs/observable';
import {qtService}  from '../services/qtrack.service';

//import {DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';



@Component({
	templateUrl: './detailsinfo.html',
	selector: 'details-info',
    
 
})



export class detailscomponent implements AfterViewInit {
	qtService = {};
	@ViewChild("detailtable") detailelement: ElementRef;
	


    
    constructor(private _qtService: qtService){
		this.qtService=_qtService;
	}

ngAfterViewInit() {

this.qtService["detail_element"] = this.detailelement;
}


}

