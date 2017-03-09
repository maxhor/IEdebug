import { Component } from '@angular/core';

//import {Observable} from 'rxjs/observable';
import { qtService } from '../services/qtrack.service';





@Component({
	templateUrl: './artikelgallery.html',
	selector: 'artikelgallery',


})



export class artikelgallery {
	qtService = {};



	constructor(private _qtService: qtService) {
		this.qtService = _qtService;
	}

}