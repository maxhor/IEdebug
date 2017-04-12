import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {LocalStorageService,LOCAL_STORAGE_SERVICE_CONFIG} from 'angular-2-local-storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/toPromise';

import { GrowlModule, MessagesModule, InputTextModule, ButtonModule, DataTableModule,DataGridModule, PanelModule,SharedModule,DropdownModule, DialogModule, AutoCompleteModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { qtService } from './services/qtrack.service';
import { ServerConstants } from './services/constants.on_server';
import { navbar } from './navigation/navbar.component';
import { login } from './navigation/login.component';
import { kopcomponent } from './kop/kop.component';
import { adrescomponent } from './kop/adres.component';
import { detailscomponent } from './detail/details.component';
import { artikelgallery } from './detail/artikelgallery.component';


@NgModule({
  declarations: [
    AppComponent, navbar, kopcomponent,adrescomponent,detailscomponent, login, artikelgallery
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MessagesModule,
    ReactiveFormsModule,

    InputTextModule,
    HttpModule,
    
    AutoCompleteModule,
    DropdownModule,
    BrowserAnimationsModule,
    DataTableModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    ButtonModule
  ],
  providers: [qtService, ServerConstants],
  bootstrap: [AppComponent]
})
export class AppModule {

}
