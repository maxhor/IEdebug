import { Injectable, ViewChild, ViewChildren, QueryList, ElementRef, EventEmitter, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
//import { LocalStorageService } from 'angular-2-local-storage';
import { ServerConstants } from './constants.on_server';


@Injectable()

//this.allfields._results[5].nativeElement.checked=true
//this.dom_elements._results[5].nativeElement.checked=true

export class qtService {

    cb1: HTMLElement;
    cb2: string;

    template_element: any;
    bLoggedIn = false;
    bError = false;
    bSummy = false;
    bVoorraad = false;
    bSaving = false;
    bLoading = false;
    bHidePasswordControle = false;
    bDialog_NeeJa = false;
    bDialog_JaNee = false;
    bDialog_JaNeeReverse = false;
    bValidatingFromAutocomplete;
    bArtikelGallery = false;
    bBevestigd = false;
    bNewRelatie = false;
    bMessage = false;
    bAdresInfo = false;
    bHideToolTip = false;
    bToolTipHide = true;
    bhidevrrdbutton = false
    bVoorraadFetched: boolean;
    bArtikelenFetched = false;
    bSeizoenIsValid = false;
    bChanged: boolean;
    bDetailEmpty = true;
    bDetailChanged: boolean;
    bDetailHidden = false;
    bKopChanged = false;
    bCounted = true;
    bOffLine = false;
    bAdress = false;
    bSynchronising = false;
    bnaleveren = false;



    art_selected = false;



    disable_nwArtikel = true
    disable_search = true;
    disable_save = true;
    disable_actions = false;
    disable_delete = true;
    disable_clear = true;
    disable_moveFirst = true;
    disable_movePrevious = true;
    disable_moveNext = true;
    disable_moveEnd = true;
    disable_tabel = true;
    disable_copy = true;

    disable_VrrdFris = false;

    seizoen_idx = -1;
    btc_idx = -1;
    art_idx = -1;
    kleur_idx = -1;
    maat_idx = -1;
    aantal_idx = -1;
    bBevestigd_idx = -1;
    freenumfield1_idx = -1;
    not_counted_idx = -1;
    valbedrag_idx = -1;
    autoadded_idx = -1;
    rowid_idx = -1;
    naam_idx = -1;
    relatie_idx = -1;
    adres_idx = -1;
    datum_idx = 0;
    order_idx = 0;
    ordernr_idx = -1;
    relatienr_idx = -1
    rowid_relatie_idx = -1;
    rowid_adres_idx = -1;
    rspointer = 0; // resultset pointer
    matrixprijs = 0;
    move_direction = 0;
    galleryrows = 18;
    gallerypagelinks = 10;
    tttop = "";
    ttleft = "";
    sToolTip = "";
    sNull = "";
    adresheader = "";
    voorraad_id = "voorraadcounted";
    cursorShape = "auto";
    sErrorHeader = "";
    request = "";
    sErrorMsg = "test";
    sDialogHeader = "test";
    sGalleryHeader;
    sDialogMsg = "testest";
    formname = "order";
    formdef_id = "";
    button_ovt_label = "overzicht";
    button_voorraad_label = "voorraad";
    gallerybutton_label = "kleine plaatjes";
    nwartikelctrl = "";
    matrixtitle = "";
    oldSeizoen = "";// should in fact be dealt via additional attribute 'oldvalue' to 'control' But that involves change of control.reset method because oldvalue  
    form_content = "";
    sBevestigdMessage = "";
    sCSV = "a, b, c";
    dbname = "";
    voorraadtitle = "";
    voorraadclass = "";
    NewArtIconColor = ""
    nwArtikel = "";
    textFile = null;

    today = new Date();
    timeout_id;
    arts = ["a", "M", "PPO"];
    all_art = [];
    all_klant;
    all_adres;
    all_voorraad;
    all_art_is_counted = [];
    all_seizoen = [];
    formdefs_in_localstorage = [];
    size = [];
    visible_fields = [];
    visible_klantfields = [];
    rowids = [];


    rowsvalues = [];

    rowssummy = [];

    colsmatrix = [];
    rowsmatrix = [];
    totals = [];
    iconRowHeader = [];
    rowsvrrdmatrix = [];
    NotCounted = [];
    dropdownlist_adres = [];
    dr_a = [{ label: "add", value: {} }, { label: "lala", value: {} }];

    autocomplete_list = [[], []];// I use this mulitydimensional array because it is not possible to share the same lookuparray for different input fields.
    // sharing the same array makes the list box pop up under all inputfields sharing this lookup array


    user: user;

    templacc: ElementRef;
    artgallery;
    getFixedSessionData;

    templateaccess = {};
    lookup_userdata = {};
    seizoen = {};

    hidden = {};
    disable_inputfields = {};
    formdef = {};
    colnames = {};
    constants = {};
    kopFormToFormdefMapping = {};
    kopForm = new FormGroup({});
    detailForm = new FormGroup({});
    adresForm = new FormGroup({});
    dom_elements;
    Gallery;

    ServerConstants;
    keepEvent: any;
    column_ID: any;
    //galleryclass = "col-xs-12 col-sm-3 col-md-1";
    galleryclass = "col-xs-12 col-sm-4 col-md-2"

    iteminputstyle = { 'padding': '0px', 'textalign': 'left' }
    colssummy = [
        {
            name: "artikelnr",
            header: "artikelnr",
            editable: true
        },
        {
            name: "aantal",
            header: "aantal",
            editable: false
        },
        {
            name: "valbedrag",
            header: "bedrag",
            editable: false
        },
    ];
    kopstyles = [
        { 'color': 'blue', 'width': '3' },
        { 'color': 'red', 'width': '14' }];
    colstyles_detail = [];
    colstyles = [
        { 'color': 'blue', 'width': '13%' },
        { 'color': 'blue', 'width': '40%' },
        { 'color': 'blue', 'width': '17%', 'text-align': 'right' },
        { 'color': 'blue', 'width': '30%', 'text-align': 'right' }];
    colstyles_detail_editmode = [
        { 'color': 'blue', 'width': '30%' },
        { 'width': '11%' },
        { 'width': '11%' },
        { 'width': '11%' },
        { 'width': '11%' },
        { 'width': '11%' },
        { 'width': '11%' },
        { 'width': '11%' },];

    colstyles_detail_viewmode = [
        { 'color': 'blue', 'width': '15%' },
        { 'width': '10%' },
        { 'width': '10%' },
        { 'width': '10%' },
        { 'width': '5%' },
        { 'width': '5%' },
        { 'width': '5%' },
        { 'width': '5%' },
        { 'width': '5%' },
        { 'width': '5%' },
        { 'width': '7%' },
        { 'width': '9%', 'text-align': 'right' }];

    col_editable = [false, true, true, true, true, true, true];

    Icon_Color = ["green", "red", "blue", "red", "blue", "yellow"];

    color_counted = "#98b95f";
    color_not_counted = "#fa836b";

    //tbversioninit: tbversion;
    tbversioninit: tbversion = {
        artikelen: -1,
        relatie: -1,
        seizoen: -1,
        blank_order: -1,
        blank_artikel: -1
    }


    tbversion: tbversion;





    //iconRowHeader = ["fa-pencil","fa-search","fa-check","fa-trash-o","fa-plus-square","fa-plus","fa fa-check","fa fa-check","fa fa-check","fa-check","fa-check","fa-check","fa-check"];




    constructor(private fb: FormBuilder, private http: Http, private _serverconstants: ServerConstants) {

        this.ServerConstants = _serverconstants;
        var _tthis = this;
        let j = 0;
        this.user = { "relatienr": "0" };
        this.createDetailForm();
        this.colstyles_detail = this.colstyles_detail_editmode;
    }




    SaveBtnMsg() {// from SetDisableSave:
        // this.bChanged = (this.bKopChanged && !this.bDetailEmpty) || this.bDetailChanged;
        // return !(this.bChanged && this.kopForm.valid);
        this.sDialogHeader = "";
        this.sDialogMsg = "";

        if ((this.bDetailChanged || !this.kopForm.pristine) && this.bBevestigd) {
            this.sDialogMsg = "order is bevestigd op " + this.kopForm.get("datum").value;
            this.sDialogHeader = "order kan niet worden gewijzigd";
            this.bMessage = true;
        }
        //else if (!this.bDetailChanged && !this.bKopChanged) {
        //   this.sDialogMsg = "bewaren pas mogelijk nadat order is aangepast";
        //  this.sDialogHeader = "geen invoer aanwezig";
        //this.bMessage=true;
        //}
        else if (!this.kopForm.pristine || !this.adresForm.pristine) {
            if (!this.kopForm.valid) {
                this.sDialogHeader = "foute / onvolledige invoer";
                this.bMessage = true;
                for (let ctrl in this.kopForm.controls) {
                    if (!this.kopForm.controls[ctrl].valid) {
                        for (var msg in this.kopForm.controls[ctrl].errors) {
                            if (this.sDialogMsg != '') {
                                this.sDialogMsg = this.sDialogMsg + "\n";
                            }
                            if (msg == "required") {
                                msg = "ontbreekt";
                            }
                            if (msg == "pattern") {
                                msg = "ongeldig";
                            }
                            this.sDialogMsg = this.sDialogMsg + ctrl + ": " + msg;
                        }

                    }
                }
            }
            if (!this.adresForm.valid) {
                this.sDialogHeader = "foute / onvolledige invoer";
                this.bMessage = true;
                for (let ctrl in this.adresForm.controls) {
                    if (!this.adresForm.controls[ctrl].valid) {
                        for (var msg in this.adresForm.controls[ctrl].errors) {
                            if (this.sDialogMsg != '') {
                                this.sDialogMsg = this.sDialogMsg; //  new line with /n or \n does not work 
                            }
                            if (msg == "required") {
                                msg = "ontbreekt";
                            }
                            if (msg == "pattern") {
                                msg = "ongeldig";
                            }
                            this.sDialogMsg = this.sDialogMsg + ctrl + ": " + msg;
                        }

                    }
                }
            }
            else if (this.bDetailEmpty) {
                this.bMessage = true;
                this.sDialogMsg = "orderdetails zijn leeg";
                this.sDialogHeader = "geen orderdetails aanwezig";
            }
        }

    }

    CloseBtnMsg() { };

    tabel() { };
    copy() {
        let i = 0;
    };
    initUser_part1(user: user) {
        this.bLoggedIn = true;

        this.bHideToolTip = Boolean(window.localStorage.getItem('bHideToolTip'));

        this.bHidePasswordControle = true;

        this.user = user;
        this.dbname = user.dbname
        this.tbversion = JSON.parse(window.localStorage.getItem('tbversion'));
        if (this.ServerConstants.is_production) {
            this.ServerConstants.rooturl = user.dbname + "/";
            this.ServerConstants.loginurl = "login/";
        }
        // else  {
        // initional settings in this.ServerConstants remain valid, pointing to local host
        // }

        if (this.tbversion == null) {
            window.localStorage.setItem('tbversion', JSON.stringify(this.tbversioninit));
            this.tbversion = this.tbversioninit;
        }

        if (user.relatienr != "0") {
            this.getusersettings(user.dbname, user.email).subscribe(data => {
                this.user = data;
                if (this.user.loginstatus == "Ok") {
                    window.localStorage.setItem('user', JSON.stringify(data));
                    this.initUser_part2();
                }
                else {
                    this.bError = true;
                    this.sErrorHeader = "fout bij ophalen gebruikersgegevens";
                    this.sErrorMsg = this.user.message;
                }
            })
        }
        else {
            this.initUser_part2();
        }


    }

    initUser_part2() {
        // var PostcodeObservable = this.PostcodeApi("1600AA");
        // PostcodeObservable.subscribe(response => {

        //     var data = response.json();
        //     var headers = response.headers;
        //     if (data._embedded.addresses.length > 0) {
        //         this.adresForm.get("straat").setValue(data._embedded.addresses[0].street);
        //         this.adresForm.get("woonplaats").setValue(data._embedded.addresses[0].city.label);
        //     }
        //     else {
        //         this.adresForm.get("straat").setValue(null);
        //         this.adresForm.get("woonplaats").setValue(null);
        //     }

        //     return null;
        // },
        //     error => {
        //         this.sErrorHeader = "ophalen postcode mislukt";
        //         this.bError = true;
        //         switch (error.status) {
        //             case 429:
        //                 this.sErrorMsg = "limiet overschreden, response status " + error.status;
        //                 break;
        //             default:
        //                 this.sErrorMsg = "response: " + error.status;
        //                 break;
        //         }
        //     });


        this.lookup_generic("tbversion").subscribe(
            data => {
                this.initUser_part3(data);
                //  var t = JSON.stringify(this.tbversioninit)
            }
        )

    }




    initUser_part3(serverversions) {
        this.cursorShape = "wait";
        this.disable_nwArtikel = true;
        var tbversion: tbversion = {};
        if (serverversions.rows != undefined) {
            for (let i = 0; i < serverversions.rows.length; i++) {
                tbversion[serverversions.rows[i].values[0]] = serverversions.rows[i].values[1];
            }
        }
        else {
            tbversion = serverversions;
        }


        if (this.tbversion.seizoen != tbversion.seizoen || window.localStorage.getItem('seizoen') == null || this.user.relatienr == "0") {
            this.lookup_generic("seizoenlookup").subscribe(
                data => {
                    if (data.TableName.substring(0, 5) == "error") {
                        this.bError = true;
                        this.sErrorMsg = data.TableName
                    }
                    else {
                        this.all_seizoen = data;
                        this.tbversion.seizoen = tbversion.seizoen;
                        window.localStorage.setItem('seizoen', JSON.stringify(data));
                        window.localStorage.setItem('tbversion', JSON.stringify(this.tbversion));
                        this.buildform(this.tbversion.blank_order, tbversion.blank_order);
                    }

                },
                d => {
                    console.log("completed")
                }
            )
        }
        else {
            this.all_seizoen = JSON.parse(window.localStorage.getItem('seizoen'));
            this.buildform(this.tbversion.blank_order, tbversion.blank_order);
        }


        if (this.tbversion.relatie != tbversion.relatie || window.localStorage.getItem('relatie') == null || this.user.relatienr == "0") {
            this.lookup_generic("klantlookup").subscribe(
                data => {
                    if (data.TableName.substring(0, 5) == "error") {
                        this.bError = true;
                        this.sErrorMsg = data.TableName
                    }
                    else {
                        this.all_klant = data;
                        this.tbversion.relatie = tbversion.relatie;
                        window.localStorage.setItem('relatie', JSON.stringify(data));
                        window.localStorage.setItem('tbversion', JSON.stringify(this.tbversion));
                    }
                });
        }
        else {
            this.all_klant = JSON.parse(window.localStorage.getItem('relatie'));
        }

        if (this.tbversion.adres != tbversion.adres || window.localStorage.getItem('adres') == null || this.user.relatienr == "0") {
            this.lookup_generic("adreslookup").subscribe(
                data => {
                    if (data.TableName.substring(0, 5) == "error") {
                        this.bError = true;
                        this.sErrorMsg = data.TableName
                    }
                    else {
                        this.all_adres = data;
                        this.tbversion.adres = tbversion.adres;
                        window.localStorage.setItem('adres', JSON.stringify(data));
                        window.localStorage.setItem('tbversion', JSON.stringify(this.tbversion));
                    }
                });
        }
        else {
            this.all_adres = JSON.parse(window.localStorage.getItem('adres'));
        }


        if (this.tbversion.artikelen != tbversion.artikelen || window.localStorage.getItem('artikelen') == null || this.user.relatienr == "0") {
            this.bError = false;

            this.lookup_art("artikellookup").subscribe( //context is quite unclear to me. 
                data => {
                    if (data[0]["pair"] != undefined) {
                        if (data[0].pair[0] == "error") {
                            this.bError = true;
                            this.sErrorMsg = data[0].pair[1];
                        }
                    }
                    else {
                        this.all_art = data;
                        this.tbversion.artikelen = tbversion.artikelen;
                        window.localStorage.setItem('artikelen', JSON.stringify(data));
                        window.localStorage.setItem('tbversion', JSON.stringify(this.tbversion));
                        this.ProcessAllArt();//via calling this function, I get the proper qtService context for all variables. Directly here, context not ok 
                        //whatever. 

                    }
                });
        }
        else {
            this.all_art = JSON.parse(window.localStorage.getItem('artikelen'));
            this.createArtGallery();
            this.cursorShape = "auto";
            this.disable_nwArtikel = false;
            this.bArtikelenFetched = true;
            this.disable_search = false;
            this.disable_clear = false;

            if (this.bSeizoenIsValid) {
                this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });
            }
        }

        if (!this.bOffLine) {
            this.lookup_generic("voorraadlookup").subscribe(
                data => {
                    this.all_voorraad = data;

                    if (data.TableName.substring(0, 5) == "error") {
                        this.bError = true;
                        this.sErrorHeader = "fout bij ophalen " + data.TableName;
                        this.sErrorMsg = data.TableName
                    }
                    else {
                        this.bVoorraadFetched = true;
                        this.updateArtGalleryVoorraad();

                    }

                });

            this.lookup_generic("art_stock_is_counted_lookup").subscribe(
                data => {
                    this.all_art_is_counted = data["rows"].map(row => row.values[0]);

                    if (data.TableName.substring(0, 5) == "error") {
                        this.bError = true;
                        this.sErrorMsg = data.TableName
                    }
                });


            this.get_allformdefs_from_localstorage();
            if (this.formdefs_in_localstorage.length > 1) {
                this.bDialog_JaNee = true;
                this.sDialogMsg = "";
                this.sDialogHeader = "Orders bewaren op de server ?";
                this.request = "synchronise"
                for (let i = 0; i < this.formdefs_in_localstorage.length; i++) {
                    this.sDialogMsg = this.sDialogMsg + this.formdefs_in_localstorage[i];
                    if (i < this.formdefs_in_localstorage.length) {
                        this.sDialogMsg = this.sDialogMsg + ", " + String.fromCharCode(13);
                    }
                }

            }


        }




    }

    ProcessAllArt() {

        this.createArtGallery(); //under subscribe, this=safesubscriber. Still, this works. Whatever
        this.cursorShape = "auto";
        this.disable_nwArtikel = false;


        this.bArtikelenFetched = true;
        this.disable_search = false;
        this.disable_clear = false;
        if (this.bSeizoenIsValid) {
            this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });
        }

    }

    offLineInit(email) {
        if (email.substr(0, 4) != "test") {
            this.tbversion = JSON.parse(window.localStorage.getItem('tbversion'));
            this.user = JSON.parse(window.localStorage.getItem('user'));

        }
        else {
            this.user.relatienr == "0";
            this.user.email = "tester@test.nl";
            this.user.role = "admin";
            this.user["defaults"] = [{ "pair": ["seizoen", "2017 Voorjaar"] }, { "pair": ["verkoopjn", "1"] }];
            this.tbversion = this.tbversioninit;

        }
        this.bOffLine = true;
        this.dbname = "(Off-line)";
        this.initUser_part3(this.tbversion);
        this.bLoggedIn = true;



    }

    lookup_art(tbname) {

        var _url = this.ServerConstants.rooturl + 'api/AllItems';
        let lookupRequest = {
            "dbname": this.user.dbname,
            "relatienr": this.user.relatienr,
            "agentnr": this.user.agentnr,
            "role": this.user.role,
            "formname": tbname
        };
        // var headers = new Headers();

        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.user.relatienr != "0") {
            return this.http.post(_url, JSON.stringify(lookupRequest), { headers: this.ServerConstants.headers }).
                map(res => res.json());
        }
        else {
            _url = "mockapi/artikel_lookup.jsn"
            return this.http.get(_url, { headers: this.ServerConstants.headers }).
                map(res => res.json());
        }

    }

    lookup_generic(tbname) {
        var _url = this.ServerConstants.rooturl + 'api/TxGetLookups';
        let lookupRequest = {
            "dbname": this.user.dbname,
            "relatienr": this.user.relatienr,
            "agentnr": this.user.agentnr,
            "role": this.user.role,
            "formname": tbname
        };
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.user.relatienr != "0") {
            return this.http.post(_url, JSON.stringify(lookupRequest), { headers: this.ServerConstants.headers }).
                map(res => res.json());
        }
        else {
            switch (tbname) {
                case "seizoenlookup":
                    _url = "mockapi/seizoen_lookup.jsn";
                    break;
                case "tbversion":
                    _url = "mockapi/tbversion_lookup.jsn";
                    break;
                case "klantlookup":
                    _url = "mockapi/klant_lookup.jsn";
                    break;
                case "adreslookup":
                    _url = "mockapi/adres_lookup.jsn";
                    break;
                case "voorraadlookup":
                    _url = "mockapi/voorraad_lookup.jsn";
                    break;
                case "art_stock_is_counted_lookup":
                    _url = "mockapi/stock_counted.jsn";
                    break;
                default:
                    _url = "";
                    break;


            }
            if (_url != '') {
                var data = this.http.get(_url);
                var data1 = data.map(res => res.json());

                return data1;
            }
            else {

                //return Observable.create(observer=>observer.onNext(0));
            }

        }

    }

    buildform(localVersion, serverVersion) {
        if (localVersion != serverVersion || window.localStorage.getItem('blank_order') == null) {
            var _tthis = this;
            this.getblankfromdb(this.formname).subscribe(data => {

                var strDummy = JSON.stringify(data);
                if (data.Status != "Ok") {
                    _tthis.sErrorMsg = data.Message;
                    _tthis.bError = true;
                }
                else {
                    _tthis.formdef = data;
                    _tthis.createForm(null);
                    _tthis.createForm("klant");
                    this.tbversion.blank_order = serverVersion;
                    window.localStorage.setItem('blank_order', JSON.stringify(data));
                    window.localStorage.setItem('tbversion', JSON.stringify(this.tbversion));
                }
            }

            )
        }
        else {
            this.formdef = JSON.parse(window.localStorage.getItem('blank_order'));
            this.createForm(null);
            this.createForm("klant");
        }






    }

    getblank() {
        if (this.disable_actions) {
            return;
        }

    }





    getblankfromdb(formname) {

        var _url = this.ServerConstants.rooturl + 'api/FormGetBlank' + "/" + formname;
        // var headers = new Headers();
        let lookupRequest = {
            "dbname": this.user.dbname,
            "relatienr": this.user.relatienr,
            "agentnr": this.user.agentnr,
            "role": this.user.role,
            "formname": formname
        };
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');



        if (this.user.relatienr == "0") { _url = "http://localhost:4200/mockapi/blank.jsn"; }
        return this.http.get(_url, { headers: this.ServerConstants.headers }).
            map(res => res.json());
        ;


    }

    createForm(formName: String) {
        var field_count = 0;
        var btc_count = 0;
        //this.clear();
        this.disable_inputfields = {};


        var _visible = [];
        var _btc = [];


        var _btcfields = [];

        var _cols = [];

        let _ctrls = {};


        var row = {};
        var _hidden = false;
        var listboxcount = 0;
        var attribute_lb_count = null;



        this.formdef["bootstrapcolumns"].forEach(function (btc) {
            field_count = 0;
            _btcfields = [];
            let _field: field;

            btc.fielddefs.forEach(function (field) {
                if (!field.hidden && field.popup_windowname == formName) {
                    if (!field.detail) {
                        _hidden = this.determineHidden(field.tbname)
                        if (!_hidden) {
                            if (field.haslistbox) {
                                attribute_lb_count = listboxcount;
                                listboxcount++;
                            }
                            else {
                                attribute_lb_count = null;
                            }

                            _field =
                                {
                                    name: field.name,
                                    tbname: field.tbname,
                                    title: field.title,
                                    type: field.type,
                                    maxlen: field.maxlen,
                                    minlen: field.minlen,
                                    format: field.format,
                                    //width: field.width+"%",
                                    width: field.width + 'em',
                                    getsfocus: field.getsfocus,
                                    required: field.required,
                                    popup_windowname: field.popup_windowname,
                                    tooltip: field.tooltip,
                                    disabled: field.disabled,
                                    haslistbox: field.haslistbox,
                                    lbcount: attribute_lb_count,
                                    btc_idx: btc_count,
                                    field_idx: field_count
                                };
                            // _field.disabled = this.determineDisabled(field.disabled);
                            _btcfields.push(_field);
                            var validatorarray = [];
                            var asynch_validatorarray = [];


                            if (field.name == "seizoen") {
                                this.SeizoenExists = this.SeizoenExists.bind(this);
                                validatorarray[0] = this.SeizoenExists;

                            }
                            else if (field.name == "relatienr") {
                                this.KlantExists = this.KlantExists.bind(this);
                                validatorarray[0] = this.KlantExists;
                            }
                            // else if (field.type == "email") {
                            //     this.EmailCheck = this.EmailCheck.bind(this);
                            //     validatorarray[0] = this.EmailCheck;

                            // }
                            // if (field.maxlen != 0 && field.maxlen > 0) {
                            //     validatorarray.push(this.MaxLenCheck(field.maxlen));

                            // }
                            if (field.required) {
                                validatorarray.push(Validators.required);

                            }

                            if (field.name == "qq_postcode") {// max is 200 requests a day. so dont waste in development
                                this.GetAdres = this.GetAdres.bind(this);
                                //asynch_validatorarray.push(setTimeout(this.GetAdres,1000));
                                asynch_validatorarray.push(this.GetAdres);

                                field.format = "^[0-9]{4}[A-Z]{2}$";

                            }
                            if (field.format.length > 2) {
                                validatorarray.push(Validators.pattern(field.format));

                                // this.FormatCheck = this.FormatCheck.bind(this);
                                // validatorarray.push(this.FormatCheck(field.title, field.minlen, field.format));
                            }








                            //  var ctrl = new FormControl('', validatorarray);
                            //var ctrl = new FormControl{value: null,validators: validatorarray);


                            if (_field.disabled == 0 || _field.disabled == 3) {
                                var ctrl = new FormControl('', validatorarray, asynch_validatorarray);
                                //   ctrl.reset({ value: null, disabled: true });
                            }
                            else {
                                if (_field.disabled == 2 && this.user.role != "customer") {
                                    var ctrl = new FormControl('', validatorarray, asynch_validatorarray);
                                }
                                else {
                                    var ctrl = new FormControl({ value: '', disabled: true }, validatorarray, asynch_validatorarray);
                                }
                            }





                            // ctrl.registerOnChange(this.CheckInput);
                            _ctrls[field.name] = ctrl;




                        }
                        else {
                            _cols.push({
                                name: field.name,
                                tbname: field.tbname,
                                header: field.title,
                                editable: field.editable,
                                btc_idx: field.btcColm,
                                field_idx: field_count,
                                grid: field.grid
                            });
                        }
                    }


                    if (field.disabled) {
                        this.disable_inputfields[field.name] = true;
                    }
                }
                field_count++;
            }, this)
            if (_btcfields.length > 0) {
                _btc.push(_btcfields);

            }
            btc_count++;
        }, this)

        if (formName == null) {
            this.bKopChanged = false;

            this.get_important_fieldindexes();
            this.visible_fields = _btc;


            this.kopForm = this.fb.group(_ctrls);

            this.setdefaults();
        }
        else if (formName == "klant") {
            this.visible_klantfields = _btc;
            this.adresForm = this.fb.group(_ctrls);
        }


    }

    createDetailForm() { //only one single control for nwArtikel
        let _ctrls = { disabled: true };
        var ctrl = new FormControl('', []);

        _ctrls["nwartikel"] = ctrl;
        this.detailForm = this.fb.group(_ctrls);
        this.nwartikelctrl = "nwartikel";
    }

    search() {
        if (!this.bOffLine && !this.bSynchronising) this.gettxs();
        else this.show_formdefs_from_localstorage();
    }

    gettxs() {

        if (this.disable_actions) {
            return;
        }
        var _url = this.ServerConstants.rooturl + 'api/FormGetTxs';
        this.copyFormControlsToFormDef(true, false, this.visible_fields);
        this.copyFormControlsToFormDef(true, false, this.visible_klantfields);


        this.formdef["usersettings"] = this.user;
        this.form_content = JSON.stringify(this.formdef);
        this.bLoading = true;

        //    this.qq=JSON.stringify({'fd':'test'});
        //    var data=JSON.stringify({'fd':'test'});
        // var headers = new Headers();
        var _icon = "";
        var _tthis = this;
        var _summariser = {};
        this.cursorShape = "wait";
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.user.relatienr != "0") {
            var observable = this.http.post(_url, this.form_content, { headers: this.ServerConstants.headers });
        }
        else {
            _url = "http://localhost:4200/mockapi/order.jsn";
            var observable = this.http.get(_url, { headers: this.ServerConstants.headers });
        }
        observable.
            map(res => res.json()).subscribe((data) => {
                //   console.log(data);
                this.cursorShape = "auto";
                if (data.Status == "Ok") {

                    var strDummy = JSON.stringify(data);
                    _tthis.rowids = data.rowids.slice();//keep resultset. resultset in info{} will be lost after moving in rs
                    _tthis.rspointer = 0;
                    //this.rowsvalues = this.getdetailrows();
                    _tthis.formdef = data;

                    _tthis.copyFormDefToFormControls();

                    _tthis.bKopChanged = false;
                    _tthis.bDetailChanged = false;


                    _tthis.disable_save = true;

                    _tthis.getDetailsMatrix(_tthis);
                    //     _tthis.find_seizoen(data["bootstrapcolumns"][0].fielddefs[_tthis.seizoen_idx].value);
                    if (_tthis.rowsvalues.length > 0) {
                        _tthis.getmatrixrows(_tthis.findartikel(_tthis.rowsvalues[0]));
                        _tthis.getvrrdmatrixrows();
                    }
                    else {
                        _tthis.rowsmatrix.length = 0;
                    }
                }
                else {
                    _tthis.rowids = [];
                    _tthis.sErrorMsg = data.Message;
                    _tthis.sErrorHeader = data.Status;
                    _tthis.bError = true;
                }
                _tthis.bLoading = false;
                _tthis.enableMoveButtons();
                _tthis.set_iconcolors();
            })
    }

    gettx(rowid) {

        var headers = new Headers();
        var _summariser = {};
        var _icon = "";
        var _tthis = this;
        this.cursorShape = "auto";
        headers.append('Content-Type', 'application/json');

        this.gettxfromdb(rowid).subscribe(data => {
            _tthis.cursorShape = "auto";
            _tthis.formdef = data;

            //this.rowsvalues = this.getdetailrows();
            var _tt = data.bootstrapcolumns.filter(btc => !btc.detail).map(btc => btc.fielddefs);

            _tthis.bKopChanged = false;
            _tthis.bDetailChanged = false;
            _tthis.disable_save = true;


            _tthis.copyFormDefToFormControls();

            _tthis.getDetailsMatrix(_tthis);
            //   _tthis.find_seizoen(data["bootstrapcolumns"][0].fielddefs[_tthis.seizoen_idx].value);
            if (_tthis.rowsvalues.length > 0) {
                _tthis.getmatrixrows(_tthis.findartikel(_tthis.rowsvalues[0]));
                _tthis.getvrrdmatrixrows();
            }
            else {
                _tthis.rowsmatrix.length = 0;
            }

            _tthis.set_iconcolors();
        })
            ;
    }

    gettxfromdb(rowid) {
        var _url = this.ServerConstants.rooturl + 'api/FormGetTx/' + rowid;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');

        return this.http.get(_url).
            map(res => res.json());
        ;
    }

    gettx_fromlocalstorage(id) {

        this.formdef = JSON.parse(window.localStorage.getItem(id));
        this.copyFormDefToFormControls();

        this.getDetailsMatrix(this);
        if (this.rowsvalues.length > 0) {
            this.getmatrixrows(this.findartikel(this.rowsvalues[0]));
        }
        this.bDetailChanged = false



    }

    get_allformdefs_from_localstorage() {
        this.formdefs_in_localstorage.length = 0;
        for (var formdef in window.localStorage) {
            if (formdef.substr(0, 6) == "order_") {
                this.formdefs_in_localstorage.push(formdef.slice(0))
            }
        }
    }

    show_formdefs_from_localstorage() {
        this.get_allformdefs_from_localstorage();
        this.gettx_fromlocalstorage(this.formdefs_in_localstorage[0]);
        this.enableMoveButtons();
    }

    getusersettings(dbname, email) {
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/dbname/' + dbname + "/email" + "/" + email;
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/dbname/' + dbname + "/email" + "/" + email;
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/';
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/';
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/' + email;
        var _url = this.ServerConstants.rooturl + 'api/getUserSettings/' + dbname + "/" + email + "/";



        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json;q=0.9');

        return this.http.get(_url).
            map(res => res.json());
    }

    savetx() {
        this.copyFormControlsToFormDef(true, false, this.visible_fields);
        this.copyFormControlsToFormDef(true, false, this.visible_klantfields);
        if (!this.bOffLine) this.savetoserver();
        else this.savetolocalstorage();

    }

    savetolocalstorage() {

        let seqnumber = window.localStorage.length;
        if (this.formdef_id == "") {
            let customername = this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value;
            this.formdef_id = "order_" + customername + "_" + seqnumber;
        }

        window.localStorage.setItem(this.formdef_id, JSON.stringify(this.formdef));
        this.clear();
        this.gettx_fromlocalstorage(this.formdef_id);
        this.formdef_id = "";

        this.sDialogMsg = "order is bewaard op dit werkstation";
        this.sDialogHeader = "order ";
        this.bMessage = true;

        this.bDetailChanged = false;
        this.update_all_adres();

    }

    //

    savetoserver() {
        var _url = this.ServerConstants.rooturl + 'api/FormSave';
        this.delete_null_rows_from_formdef();

        if (this.bSaving) {
            return;
        }
        this.bSaving = true;
        this.cursorShape = "wait";
        this.formdef["usersettings"] = this.user;
        this.form_content = JSON.stringify(this.formdef);
        var _tthis = this;
        var len = 0;
        // var headers = new Headers();

        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (!this.disable_actions) {
            this.disable_actions = true;
            this.disable_save = true;
            this.http.post(_url, this.form_content, { headers: this.ServerConstants.headers }).
                map(res => res.json()).subscribe((data) => {
                    //  console.log(data);
                    _tthis.disable_actions = false;
                    _tthis.cursorShape = "auto";
                    if (data.Message == "Ok") {
                        _tthis.rowids[this.rspointer] = data.bootstrapcolumns[0].fielddefs[0].value;
                        _tthis.formdef = data;
                        _tthis.bKopChanged = false;
                        _tthis.bDetailChanged = false;



                        _tthis.getDetailsMatrix(_tthis);
                        if (_tthis.bSynchronising) {
                            _tthis.clearfromlocalstorage();
                        }
                        _tthis.update_all_adres();
                        _tthis.bNewRelatie = false;
                        _tthis.copyFormDefToFormControls();

                    }
                    else {
                        _tthis.sErrorMsg = data.Message;
                        _tthis.sErrorHeader = data.Status;
                        _tthis.bError = true;
                        _tthis.disable_save = false;

                    }
                    _tthis.bSaving = false;
                })
        }

    }

    setdefaults() {
        var index = 0;
        for (var i = 0; i < this.user["defaults"].length; i++) {

            if (this.kopForm.controls[this.user["defaults"][i].pair[0]] != undefined) {
                this.kopForm.controls[this.user["defaults"][i].pair[0]].setValue(this.user["defaults"][i].pair[1]);
            }
            else {
                let fieldindex = this.formdef["bootstrapcolumns"][0].fielddefs.findIndex(fielddef => fielddef.name == this.user["defaults"][i].pair[0]);
                this.formdef["bootstrapcolumns"][0].fielddefs[fieldindex].value = this.user["defaults"][i].pair[1];
            }
            if (this.user["defaults"][i].pair[0] == 'seizoen') {
                if (this.kopForm.controls["seizoen"] != undefined) {
                    if (this.kopForm.controls["seizoen"].disabled) {
                        //     this.find_seizoen(this.user["defaults"][i].pair[1]);//must be called explicitly because in case field seizoen is diabled,                
                        this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false }); //seizoenexists is not called from validator 
                        this.bSeizoenIsValid = true;
                    }
                }


            }

        }







    }



    determineHidden(fieldtbname) {

        if (this.user.role == "customer" && fieldtbname == "relatie") {
            return true;
        }
        else {
            return false;
        }

    }

    determineDisabled(disabled) {
        if ((disabled == 2 && this.user.role == "customer") || disabled == 1) {
            return true;
        }
        else {
            return false;
        }
    }

    artselect(event) {
        let i = 0;
    }

    // copyAdresToFormDef(dropdownfield) {
    //     let label = dropdownfield.label;
    //     this.kopForm.get("afleveradres").setValue(label);
    //     let adres = dropdownfield.selectedOption.values;
    //     for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
    //         let btcfields = this.visible_klantfields[btc];
    //         let fieldcount = 0;
    //         for (var j = 0; j < btcfields.length; j++) {
    //             let field: field;
    //             field = btcfields[j];
    //             if (adres[field.name] != undefined) {
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = adres[field.name];
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].oldvalue = adres[field.name];
    //                 this.adresForm.get(field.name).setValue(adres[field.name]);
    //             }
    //         }
    //     }

    // }

    // copyKlantToFormDef(index) {
    //     let i = 0;
    // }

    // qqcopyFormControlsToFormDef(bSearch) {
    //     var btcfields = [];
    //     var fieldcount = 0;

    //     for (var btc = 0; btc < this.visible_fields.length; btc++) {
    //         btcfields = this.visible_fields[btc];
    //         fieldcount = 0;
    //         for (var j = 0; j < btcfields.length; j++) {
    //             let field: field;
    //             field = btcfields[j];

    //             if (field.disabled != 3 || bSearch) { //diables=3 means: field can be edited for purpose of seraching. But when saving, the input is ignored 
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = this.kopForm.controls[field.name].value;
    //             }

    //         }
    //     }
    //     for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
    //         btcfields = this.visible_klantfields[btc];
    //         fieldcount = 0;
    //         for (var j = 0; j < btcfields.length; j++) {
    //             let field: field;
    //             field = btcfields[j];

    //             if (field.disabled != 3 || bSearch) { //diables=3 means: field can be edited for purpose of seraching. But when saving, the input is ignored 
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = this.adresForm.controls[field.name].value;
    //             }

    //         }
    //     }
    //     this.adresheader = this.kopForm.get("afleveradres").value + " adres " + this.kopForm.get("naam").value;



    // }

    copyFormControlsToFormDef(bSearch, bOldValues, visible_fields) {
        var btcfields = [];
        var fieldcount = 0;
        let formgroup: FormGroup;
        if (visible_fields[0][0].popup_windowname != "klant") {
            formgroup = this.kopForm
        }
        else {
            formgroup = this.adresForm;
        }

        for (var btc = 0; btc < visible_fields.length; btc++) {
            btcfields = visible_fields[btc];
            fieldcount = 0;
            for (var j = 0; j < btcfields.length; j++) {
                let field: field;
                field = btcfields[j];

                if (field.disabled != 3 || bSearch) { //diables=3 means: field can be edited for purpose of seraching. But when saving, the input is ignored 
                    this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = formgroup.controls[field.name].value;
                    if (bOldValues) {
                        this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].oldvalue = formgroup.controls[field.name].value;
                    }
                }
            }
        }
    }


    copyFormDefToFormControls() {
        var btcfields = [];

        //this.kopForm.reset(); this statement generates  TypeError: Cannot read property 'length' of null. I have no clue. I replace is with createform
        this.createForm(null);


        for (var btc = 0; btc < this.visible_fields.length; btc++) {
            btcfields = this.visible_fields[btc];
            var _tthiss = this;
            for (var j = 0; j < btcfields.length; j++) {
                let field = btcfields[j];
                if (field.popup_windowname == null) {
                    this.kopForm.get(field.name).setValue(this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value);
                    if (this.dom_elements != undefined) {
                        if (this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].type === "checkbox") {
                            let index = this.dom_elements._results.findIndex(el => el.nativeElement.id == field.name);

                            if (this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value == 1) {
                                this.dom_elements._results[index].nativeElement.checked = true;
                            }
                            else {
                                this.dom_elements._results[index].nativeElement.checked = false;
                            }
                        }
                    }
                }
            }
        }

        this.filteradres(this.kopForm.get("relatienr").value);


        for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
            btcfields = this.visible_klantfields[btc];

            for (var j = 0; j < btcfields.length; j++) {
                let field = btcfields[j];
                if (field.popup_windowname == "klant") {
                    this.adresForm.get(field.name).setValue(this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value);
                }
            }
        }


        if (this.formdef["bootstrapcolumns"][0].fielddefs[this.bBevestigd_idx].value == "1") {
            this.sBevestigdMessage = "Order is bevestigd op " + this.kopForm.get("datum").value;
            this.bBevestigd = true;
        }
        else {
            this.sBevestigdMessage = "";
            this.bBevestigd = false;
        }
        this.adresheader = this.kopForm.get("afleveradres").value + " adres " + this.kopForm.get("naam").value;


    }

    dropdown_selected(field, value) {
        if (this.kopForm.get("afleveradres").value == value) {
            return true;

        }
    }

    Changed(event) {
        //      if (!this.bValidatingFromAutocomplete) {
        this.bKopChanged = false;

        var btcfields = [];
        var fieldcount = 0;

        for (var btc = 0; btc < this.visible_fields.length; btc++) {
            btcfields = this.visible_fields[btc];
            fieldcount = 0;
            for (var j = 0; j < btcfields.length; j++) {
                let field: field;
                field = btcfields[j];
                if (this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value != this.kopForm.controls[field.name].value) {
                    this.bKopChanged = true;
                    j = 100;
                    btc = 100;
                }
            }
        }
        for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
            btcfields = this.visible_klantfields[btc];
            fieldcount = 0;
            for (var j = 0; j < btcfields.length; j++) {
                let field: field;
                field = btcfields[j];
                if (this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value != this.adresForm.controls[field.name].value) {
                    this.bKopChanged = true;
                    j = 100;
                    btc = 100;
                }
            }
        }


        this.disable_save = this.SetDisableSave();
        if (event.currentTarget.id == "naam") {
            this.cust_add(this.kopForm.get(event.currentTarget.id).value, 1);
        }



        //this.bValidatingFromAutocomplete = false;


    }



    move(direction) {
        if (this.disable_actions) {
            return;
        }
        if (direction == 1) { this.rspointer++; }
        else if (direction == -1) { this.rspointer--; }
        else if (direction == 0) { this.rspointer = 0; }
        else if (direction == 9999) {
            if (this.bOffLine || this.bSynchronising)
                this.rspointer = this.formdefs_in_localstorage.length;



            else
                this.rspointer = this.rowids.length - 1;

        }
        if (this.bOffLine || this.bSynchronising) this.gettx_fromlocalstorage(this.formdefs_in_localstorage[this.rspointer]);
        else this.gettx(this.rowids[this.rspointer]);


        this.enableMoveButtons();
    }

    enableMoveButtons() {
        if (this.rspointer == 0) {
            this.disable_moveFirst = true;
            this.disable_movePrevious = true;
        }
        else {
            this.disable_moveFirst = false;
            this.disable_movePrevious = false;
        }

        let len = 0;
        if (this.bOffLine || this.bSynchronising) len = this.formdefs_in_localstorage.length;
        else
            len = this.rowids.length;

        if (this.rspointer == len - 1) {
            this.disable_moveEnd = true;
            this.disable_moveNext = true;
        }
        else {
            this.disable_moveEnd = false;
            this.disable_moveNext = false;
        }
    }

    onEdit(event) {
        var i = 0;
    }

    clearrequest() {

        if (this.bDetailChanged || !this.kopForm.pristine) {
            this.sDialogMsg = "Er zijn wijzigingen die nog niet zijn bewaard. Cancel ?";
            this.sDialogHeader = "er zijn wijzigingen die niet zijn opgeslagen";
            this.bDialog_JaNeeReverse = true;
            this.request = "clear";
        }

        else {
            this.clear();
        }
    }

    moverequest(direction) {
        if (this.bDetailChanged || !
            this.kopForm.pristine) {
            this.sDialogMsg = "Er zijn wijzigingen die nog niet zijn bewaard. Cancel ?";
            this.sDialogHeader = "er zijn wijzigingen die niet zijn opgeslagen";
            this.bDialog_JaNeeReverse = true;
            this.request = "move";
            this.move_direction = direction;
        }
        else {
            this.bDialog_JaNeeReverse = false;
            this.move(direction);
        }
    }
    execute_request() {

        if (this.request == "clear") {
            this.clear();
        }
        else if (this.request == "move") {
            this.move(this.move_direction);

        }
        else if (this.request == "synchronise") {
            this.bSynchronising = true;
            this.gettx_fromlocalstorage(this.formdefs_in_localstorage[0]);
            this.enableMoveButtons();


        }
        else if (this.request == "clearfromlocalstorage") {
            this.clearfromlocalstorage();
        }
        else if (this.request == "synchronise_stop") {

            this.bSynchronising = false;

        }
        this.hide_confirm_dialog();

    }

    hide_confirm_dialog() {
        //let bLocalStorageSynchronising = false;
        if (this.request == "clearfromlocalstorage") {
            // if (this.formdefs_in_localstorage.length > 0) {

            //let bLocalStorageSynchronising = true;
            this.bDialog_JaNee = true;
            this.sDialogHeader = "bevestig";
            this.sDialogMsg = "stoppen met synchroniseren?"
            this.request = "synchronise_stop";

            //}
            //else {
            this.bSynchronising = false;
            //}
        }
        //if (!bLocalStorageSynchronising) {
        this.bDialog_JaNee = false;
        this.bDialog_JaNeeReverse = false;
        this.bDialog_NeeJa = false;
        this.request = "";
        //}

    }



    clear() {
        this.bDialog_JaNeeReverse = false;

        //this.saveForm=true;
        //this.kopForm.reset();
        this.createForm(null);
        this.createForm("klant");

        this.detailForm.reset();
        this.rowsvalues = [];
        this.rowsmatrix = [];
        this.dropdownlist_adres.length = 0;
        this.bError = false;
        this.nwArtikel = "";
        this.matrixtitle = "";
        this.voorraadtitle = "";

        this.adresheader = "";
        this.bhidevrrdbutton = true;
        this.bKopChanged = false;
        this.bBevestigd = false;
        this.bDetailChanged = false;
        this.bDetailHidden = true;
        this.bDetailEmpty = true;
        this.bDialog_JaNee = false;
        this.bDialog_JaNeeReverse = false;
        this.bDialog_NeeJa = false;
        this.bAdresInfo = false;
        this.bMessage = false;
        this.disable_copy = true;
        this.disable_delete = true;
        this.disable_moveEnd = true;
        this.disable_moveFirst = true;
        this.disable_moveNext = true;
        this.disable_movePrevious = true;

        this.disable_save = true;
        this.disable_tabel = true;
        this.rowids = [];
        this.totals.length = 0;
        //this.bSynchronising = false;
        this.bNewRelatie = false;
        this.bValidatingFromAutocomplete = false;

        if (this.formdef["FormName"] == this.formname) {
            this.formdef["rowids"].length = 0;
            for (var i = 0; i < this.formdef["bootstrapcolumns"].length; i++) {
                this.formdef["bootstrapcolumns"][i].rows.length = 0;
                for (var j = 0; j < this.formdef["bootstrapcolumns"][i].fielddefs.length; j++) {
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].value = null;
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].oldvalue = null;
                }
            }
            this.setdefaults();
        }
        else {
            this.getblank();
        }

        if (this.bSynchronising) {
            this.request = "clearfromlocalstorage";
            this.bDialog_JaNee = true;
            this.sDialogHeader = "bevestigen";
            this.sDialogMsg = "verwijderen van dit werkstation?";
        }

    }

    clearfromlocalstorage() {
        localStorage.removeItem(this.formdefs_in_localstorage[this.rspointer]);
        this.formdefs_in_localstorage.splice(this.rspointer, 1);
        if (this.rspointer + 1 > this.formdefs_in_localstorage.length) {
            this.rspointer = this.formdefs_in_localstorage.length - 1;
        }
        if (this.formdefs_in_localstorage.length == 0) {
            this.bSynchronising = false;
        }
        else {
            this.gettx_fromlocalstorage(this.formdefs_in_localstorage[this.rspointer]);
        }
    }

    findartikel(art_argument) {
        var artfound = this.all_art.find(art => art.artikelnr == art_argument.artikelnr);
        return artfound;
    }

    setrequest(request) {
        this.request = request;
    }

    toggle_images_size() {

        this.createArtGallery();
        this.updateArtGalleryVoorraad();
        let t = this.artgallery.pop();
        //setTimeout(this.artgallery.push(t),1000);



        if (this.galleryclass == "col-xs-12 col-sm-3 col-md-1") {
            this.galleryclass = "col-xs-12 col-sm-4 col-md-2";
            this.gallerybutton_label = "kleine plaatjes";
            this.galleryrows = 18;
            this.gallerypagelinks = 3;
        }
        else {
            this.galleryclass = "col-xs-12 col-sm-3 col-md-1";
            this.gallerybutton_label = "grote plaatjes";
            this.galleryrows = 48;
            this.gallerypagelinks = 6;
        }

    }

    toggle_editmode() {

        if (!this.bSummy) {
            let _bedrag = 0;
            var newheader = true;
            var _attributeMirrored = "";
            var _artikel = {};
            var oldMaat = "";
            var _thisrow = [];
            var _rowssummy = [];
            var _rowobject = {};
            let _cols = [];
            //_cols = ["artikel", "kleur", "adviesprijs", "prijs", "XS", "S", "M", "L", "XL", "XXL", "aantal", "bedrag"]
            this.colstyles_detail = this.colstyles_detail_viewmode;
            for (var i = 0; i < this.rowsvalues.length; i++) {
                _artikel = this.findartikel(this.rowsvalues[i]);
                if (i > 0) {
                    newheader = oldMaat != _artikel["artmaat"].join();
                }
                if (newheader) {
                    _rowobject = new (rowdata);
                    _rowobject["artikel"] = "Artikel";
                    _rowobject["kleur"] = "Kleur";
                    _rowobject["adviesprijs"] = "AdviesPrijs";
                    _rowobject["prijs"] = "Prijs";
                    for (var j = 0; j < _artikel["artmaat"].length; j++) {
                        _attributeMirrored = "Maat_" + String.fromCharCode(65 + j)
                        _rowobject[_attributeMirrored] = _artikel["artmaat"][j];
                    }
                    _rowobject["aantal"] = "Aantal";
                    _rowobject["bedrag"] = "Bedrag";
                    _rowssummy.push(_rowobject);

                    oldMaat = _artikel["artmaat"].join();
                }

                this.getmatrixrows(_artikel);
                for (var j = 0; j < this.rowsmatrix.length; j++) {
                    _rowobject = new (rowdata);

                    var k = 0;
                    var aantal = 0;
                    for (var attribute in this.rowsmatrix[j]) {

                        if (attribute != "kleur") {
                            _attributeMirrored = "Maat_" + String.fromCharCode(65 + k)
                            aantal = aantal + this.rowsmatrix[j][attribute];
                            k++;
                        }
                        else {
                            _attributeMirrored = attribute;
                            _rowobject["artikel"] = _artikel["artikelnr"];
                            _rowobject["adviesprijs"] = _artikel["adviesprijs"];
                            _rowobject["prijs"] = _artikel["verkoopprijs"];
                        }
                        _rowobject[_attributeMirrored] = this.rowsmatrix[j][attribute];

                    }
                    _rowobject["aantal"] = aantal;
                    _bedrag = Math.round(aantal * _artikel["verkoopprijs"] * 100) / 100;
                    //_rowobject["bedrag"] = _bedrag.toLocaleString(undefined, { minimumFractionDigits: 2 });
                    _rowobject["bedrag"] = _bedrag.toFixed(2);

                    if (aantal != 0) {
                        _rowssummy.push(_rowobject);
                    }


                };

            }

            this.rowsmatrix = _rowssummy;
            //this.colsmatrix=[];
            _cols.length = 0;
            let _dummy = [];
            for (let coltitle in _rowssummy[0]) {
                _cols.push(coltitle);
                _dummy.push(_rowssummy[0][coltitle]);
            }
            //_dummy=["Artikel","Kleur","Adviesprijs","Prijs","XS","S","M","L","XL","XXL","Aantal","Bedrag"];
            _dummy = ["Artikel", "kleur", "adviesprijs", "prijs", "Maat_A", "Maat_B", "Maat_C", "Maat_D", "Maat_E", "Maat_F", "aantal", "bedrag"];
            this.colsmatrix = _cols;
            this.bSummy = true;
            this.button_ovt_label = "wijzigmodus";
            this.matrixtitle = "totaal overzicht"
        }
        else {
            this.colstyles_detail = this.colstyles_detail_editmode;
            this.getmatrixrows(this.findartikel(this.rowsvalues[0]))
            this.button_ovt_label = "overzicht";
            this.bSummy = false;

        }
    }


    toggle_showvoorraad() {
        this.bVoorraad = !this.bVoorraad;

    }

    getvoorraad() {
        var _tthis = this;
        this.disable_VrrdFris = true;
        this.lookup_generic("voorraadlookup").subscribe(
            data => {
                _tthis.all_voorraad = data;
                if (data.TableName.substring(0, 5) == "error") {
                    _tthis.bError = true;
                    this.sErrorMsg = data.TableName
                }
                else {
                    _tthis.getvrrdmatrixrows();
                    _tthis.updateArtGalleryVoorraad();
                }
                this.disable_VrrdFris = false;
            });

    }


    get_important_fieldindexes() {
        this.seizoen_idx = 7; //hardcode. after implement use of formcontroller, I get value from there using controller["fieldname"]
        for (var i = 0; i < this.formdef["bootstrapcolumns"].length; i++) {

            for (var j = 0; j < this.formdef["bootstrapcolumns"][i].fielddefs.length; j++) {
                if (this.formdef["bootstrapcolumns"][i].detail) {
                    switch (this.formdef["bootstrapcolumns"][i].fielddefs[j].name) {


                        case "dim1waarde":
                            this.btc_idx = i;
                            this.art_idx = j;

                            break;
                        case "dim2waarde":

                            this.kleur_idx = j;

                            break;
                        case "dim3waarde":

                            this.maat_idx = j;

                            break;
                        case "freenumfield1":
                            this.freenumfield1_idx = j;
                            break;
                        case "autoadded":
                            this.autoadded_idx = j;
                            break;
                        case "aantal":
                            this.aantal_idx = j;
                            break;
                        case "valbedrag":
                            this.valbedrag_idx = j;
                            break;
                        case "rowid":
                            this.rowid_idx = j;
                            break;
                        case "stock_not_counted":
                            this.not_counted_idx = j;
                            break;

                    }
                }
                else {
                    switch (this.formdef["bootstrapcolumns"][i].fielddefs[j].name) {
                        case "bevestigd":
                            this.bBevestigd_idx = j;
                            break;
                        case "naam":
                            this.naam_idx = j;
                            this.relatie_idx = i;
                            break;
                        case "relatienr":
                            if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "relatie") {
                                this.relatienr_idx = j;
                            }
                            break;
                        case "datum":
                            this.datum_idx = j;
                            break;
                        case "ordernr":
                            this.order_idx = i;
                            this.ordernr_idx = j;
                            break;
                        case "rowid":
                            if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "relatie")
                            { this.rowid_relatie_idx = j; }
                            else if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "adres") {
                                this.adres_idx = i;
                                this.rowid_adres_idx = j;
                            }


                            break;
                    }
                }
            }
        }
    }

    populate_relatie(klant) {

        let relatienr = this.kopForm.get("relatienr").value;
        var ctrl;
        let bFound: Boolean;
        let fd_index;
        //let klant = this.all_klant["rows"].find(row => row.values[1] == relatienr).values;




        this.all_klant["fields"].forEach((field, index) => {
            if (field == "rrowid") field = "rowid";
            ctrl = this.kopForm.get(field);
            if (field != "relatienr" && ctrl != undefined) {//setting value in triggers validation 'klantexists' that calls this. So this is to prevent calling itself 
                ctrl.setValue(klant.values[index]);
            }
            bFound = false;
            var len = this.formdef["bootstrapcolumns"].length;
            for (let i = 0; i < len; i++) {
                fd_index = this.formdef["bootstrapcolumns"][i].fielddefs.findIndex(fd => fd.tbname == "relatie" && fd.name == field);
                if (fd_index != -1) {
                    this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].value = klant["values"][index];
                    this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].oldvalue = klant["values"][index];
                    i = 1000;
                }
            }

        }, this)

        let afleveradres = this.filteradres(relatienr);

        this.kopForm.controls["afleveradres"].setValue(afleveradres);
        if (afleveradres != null) {
            this.populate_adrespopup(afleveradres);
        }

    }



    populate_adrespopup(adreslabel) {

        let relatienr = this.kopForm.get("relatienr").value;
        var ctrl;
        let bFound: Boolean;
        let fd_index;
        this.adresheader = adreslabel + " adres " + this.kopForm.get("naam").value


        let adres = this.all_adres["rows"].find(row => row.values[1] == relatienr && row.values[2] == adreslabel).values;
        //@#! forEach just does not work. A mess with the this context


        this.all_adres["fields"].forEach((field, index) => {
            if (field == "rrowid") field = "rowid";
            ctrl = this.adresForm.get(field);
            if (ctrl != undefined) {
                ctrl.setValue(adres[index]);
            }
            bFound = false;
            var len = this.formdef["bootstrapcolumns"].length;
            for (let i = 0; i < len; i++) {
                fd_index = this.formdef["bootstrapcolumns"][i].fielddefs.findIndex(fd => fd.tbname == "adres" && fd.name == field);
                if (fd_index != -1) {
                    this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].value = adres[index];
                    this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].oldvalue = adres[index];
                    i = 1000;
                }
            }

        }, this)

    }

    clearklant(bClearName) {


        var len = this.formdef["bootstrapcolumns"].length;
        this.adresheader = "";
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < this.formdef["bootstrapcolumns"][i].fielddefs.length; j++) {
                if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "relatie" ||
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "adres" ||
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].name == "afleveradres") {
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].value = null;
                    let ctrl = this.kopForm.get(this.formdef["bootstrapcolumns"][i].fielddefs[j].name);
                    if (ctrl != null && bClearName) {
                        ctrl.setValue("");
                    }
                    ctrl = this.adresForm.get(this.formdef["bootstrapcolumns"][i].fielddefs[j].name);
                    if (ctrl != null) {

                        ctrl.setValue("");
                    }

                }



            }
        }
        //this.copyFormDefToFormControls();// this does not work. In 'copyFormDefToFormControls', the context 'this' is lost


    }

    update_all_adres() {//reflect manual change in this adres into the all-adress collection  which is in memory
        let adreslabel =
            this.kopForm.get("afleveradres").value;
        let relatienr = this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.relatienr_idx].value;
        var ctrl;
        var adres;

        if (!this.bNewRelatie) {
            adres = this.all_adres["rows"].find(row =>
                row.values[1] == relatienr && row.values[2] == adreslabel);
            if (adres == null) {
                return;
            }


        }

        else {
            adres = { values: [] };
            this.all_adres.rows.push(adres);
        }
        this.all_adres["fields"].forEach((field, index) => {
            ctrl = this.adresForm.get(field);
            if (ctrl != undefined) {
                adres.values[index] = ctrl.value;
            }
            else if (this.bNewRelatie) {
                if (field == "doel") {
                    adres.values[index] = this.kopForm.get("afleveradres").value;
                }
                if (field == 'relatienr') {
                    adres.values[index] = relatienr;
                }
            }
        }, this)
        adres.values[0] = this.formdef["bootstrapcolumns"][this.adres_idx].fielddefs[this.rowid_adres_idx].value;

    }




    dummy() {
        let f = 0;
    }

    cust_addfromchange_event(lookupindex) {
        if (this.autocomplete_list[lookupindex].length > 0) {
            this.cust_add(this.autocomplete_list[lookupindex][0], lookupindex);
        }
        else {
            this.bAdress = true;
        }

        this.disable_save = this.SetDisableSave();

    }
    cust_add(searchargument, lookupindex) {
        let name = searchargument;
        searchargument = searchargument.toUpperCase();
        if (lookupindex == 0) {

            //this.find_seizoen(searchargument); handled by formcontrol

        }
        else if (lookupindex == 1) {
            var LinefeedPos = searchargument.indexOf("\n");
            if (LinefeedPos != -1) {
                var searchargument2 = searchargument.substr(LinefeedPos + 1, 100);
                searchargument = searchargument.substr(0, LinefeedPos);
                var klanten = this.all_klant["rows"].filter(row => row.values[2].toUpperCase() == searchargument &&
                    row.values[4].toUpperCase() == searchargument2).map(row => row.values[1]);
            }
            else {
                var klanten = this.all_klant["rows"].filter(row => row.values[2].toUpperCase() == searchargument).map(row => row.values[1]);
            }

            if (klanten.length == 1) {

                this.kopForm.controls["relatienr"].setValue(klanten[0]);
                //this.all_klant["rows"].map(row => row.values[2] + "\n" + row.values[4]).filter(cust => cust.search(new RegExp(x.query, "i")) === 0);
            }
            else {
                this.bNewRelatie = true;
                this.bAdresInfo = true;
                this.clearklant(0);
                this.adresheader = "afleveradres van nieuwe klant " + name;
                this.kopForm.get("afleveradres").setValue("statutair");
                this.dropdownlist_adres[0] = "statutair";
            }
        }
    }



    filtercustomer(index, x) {

        this.autocomplete_list[0].length = 0;
        this.autocomplete_list[1].length = 0;
        let relatieword = "";
        if (this.bNewRelatie) {
            relatieword = " nieuwe klant";
        }
        this.adresheader = "afleveradres van " + relatieword + x.query;

        if (index == 0) {
            this.autocomplete_list[0] = this.all_seizoen["rows"].map(row => row.values[0]).filter(seizoen => seizoen.search(new RegExp(x.query, "i"))
                === 0 && seizoen != 'Basic');

        }
        else if (index = 1) {
            this.autocomplete_list[1] = this.all_klant["rows"].map(row => row.values[2] + "\n" + row.values[4]).filter(cust => cust.search(new RegExp(x.query, "i")) === 0);
        }
    }

    filteradres(relatienr) {
        this.dropdownlist_adres.length = 0;
        if (this.kopForm.get("relatienr").valid) {
            this.dropdownlist_adres = this.all_adres["rows"].filter(adres => adres.values[1] == relatienr).map(adres =>
                adres.values[2])
        }
        return this.dropdownlist_adres[0];
    }


    KopBindings() {
        // this.kopForm.valueChanges.subscribe(value=>console.log(value));
        var i = 0;
    }

    HideErrorMessage() {
        this.bError = false;
        this.sErrorHeader = "";
        this.sErrorMsg = "";
    }

    HideMessage() {
        this.bMessage = false;
        this.sDialogHeader = "";
        this.sDialogMsg = "";
        this.bArtikelGallery = false;
        this.bAdresInfo = false;

    }

    InputfieldIsDBLClicked(field) {
        if (field.currentTarget.id == "afleveradres") {
            this.bAdresInfo = !this.bAdresInfo;
            if (this.kopForm.get("relatienr").value == null) {
                this.bNewRelatie = true;
            }
        }
    }

    toggleArtikelGallery() {
        this.bArtikelGallery = !this.bArtikelGallery;
    }

    nwArtikelMsg() {
        if (!this.bArtikelenFetched) {
            this.sDialogHeader = "artikel ingeven is nog niet mogelijk";
            this.sDialogMsg = "bezig met laden artikelen";
            this.bMessage = true;
        }

        else if (!this.bSeizoenIsValid) {
            this.sDialogHeader = "artikel ingeven is niet mogelijk";
            this.sDialogMsg = "seizoen eerst invullen";
            this.bMessage = true;

        }
        else {

        }
    }

    deleteItemDialogue(event) {
        var artikelnr = event.data.artikelnr;

        this.bDialog_NeeJa = true;
        this.sDialogHeader = "bevestig";
        this.sDialogMsg = "artikel " + event.data.artikelnr + " verwijderen?";
    }

    art_addfromchange_event(x) {
        x.target.value = this.art_add(x.target.value);
    }

    art_add_from_gallery(artnr: string) {
        this.setmatrixrows_just_one_empty(artnr
        );
        this.art_add(artnr);
    }

    art_add(artnr: string) {

        var artikel = this.findartikelbyartnr(artnr);

        if (artikel != null) {

            this.getmatrixrows(artikel);
            this.getvrrdmatrixrows()
            if (this.all_art_is_counted.indexOf(artnr) >= 0 || this.seizoen["isnalevering"] != "1") {
                this.NewArtIconColor = this.color_counted;
            }
            else {
                this.NewArtIconColor = this.color_not_counted;
            }

            return artikel.artikelnr;
        }
        else {
            this.bError = false;
            this.sErrorMsg = "artikel " + artnr + " niet gevonden";
            return "";
        }


    }

    findartikelbyartnr(artnr) {
        //var artfound = this.all_art.find(art => art.artikelnr == artnr);
        var artfound = this.all_art.find(art => art.artikelnr.toLowerCase() == artnr.toLowerCase());
        return artfound;
    }

    art_select(x) {
        var artnr = x.target.value;
        this.bError = true;
        this.sErrorMsg = "artikel: " + x.target.value;
        if (this.arts.find(art => art == artnr)) {

            this.art_add(x.target.value);
        }

    }

    getdetailrows() { //creates the array that is used by the datatable to show the detailrows. from the formdef received from server,
        //from all datarows the visible fields are copied into the detailrows. Only for non-matrix. (matrix view has 'createSummariser')

        // wel gecodeerd, nog niet getest

        var _rowvalues = new (rowdata);
        var _rowsvalues = [];
        var tt: {};
        var rowcount = 0;
        var field = null;
        var btc_idx = 0;
        var attribute = "";
        var attribute_lookup = "";


        for (var i = 0; i < this.formdef["bootstrapcolumns"][this.btc_idx].rows; i++) {
            for (var j = 0; j < this["fields"].length; j++) {
                if (this["fields"][j].btc_idx == i && this["fields"][j].field_idx == j) {
                    _rowvalues[this["fields"][j].name] = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].fielddefs[j].value;
                }
                this.rowsvalues.push(_rowvalues);
            }
        }




        return _rowsvalues;


    }

    filter(x) {
        this.art_selected = false;
        //this.arts = this.all_art.filter(this_art => this_art.artikelnr.search(new RegExp(x.query, "i")) === 0 &&
        //  (this_art.seizoen === this.kopForm.controls["seizoen"].value || this_art.seizoen == "Basic" || this.voorraadexists(this_art.artikelnr))).map(this_art => this_art.artikelnr);
        if (x.query != "") {
            this.arts = this.all_art.filter(this_art => this_art.artikelnr.search(new RegExp(x.query, "i")) === 0 &&
                (this_art.seizoen === this.kopForm.controls["seizoen"].value || this_art.seizoen == "Basic")).map(this_art => this_art.artikelnr);
        }
        else {
            this.arts = [];
            var _arts = this.all_art.filter(this_art =>
                (this_art.seizoen === this.kopForm.controls["seizoen"].value || this_art.seizoen == "Basic")).map(this_art => this_art.artikelnr);
            setTimeout(() => {
                this.arts = _arts;
            }, 10);


        }



        // if (this.seizoen["enddate"].valueOf() < this.today.valueOf()) {
        //     this.arts.filter(this_art => this.voorraadexists(this_art))
        //}
    }

    voorraadexists(artikelnr) {
        return this.all_voorraad["rows"].findIndex(row => row["values"][0] == artikelnr) > -1;
    }

    createSummariser() {// creates summariserobject, that has an attribute for every item in the order containg the total amount (totalised over maat / kleur)
        var _existing;
        var _rowvalues = [];
        var _oldrowvalues = [];
        var summariser = {};
        var existing = {};
        var aantal = 0;
        var oldaantal = 0;
        var count = 0;
        var artnr = "";
        var method = "";
        var autoadded = false;
        var valbedrag = 0;
        var icon_color = "green";

        for (count = 0; count < this.formdef["bootstrapcolumns"][this.btc_idx].rows.length; count++) {
            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].method == "") {
                this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].method = null;
            }
            _rowvalues = this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].values;
            _oldrowvalues = this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].oldvalues;

            autoadded = this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].values[this.autoadded_idx] == 1;

            if (!autoadded) {
                artnr = _rowvalues[this.art_idx];
                aantal = Number(_rowvalues[this.aantal_idx]) * -1;
                oldaantal = Number(_oldrowvalues[this.aantal_idx]) * -1;
                valbedrag = Number(_rowvalues[this.valbedrag_idx]) * -1;
                if (_rowvalues[this.rowid_idx] != null) {
                    existing[artnr] = true;
                }
                if (summariser[artnr] == undefined) {
                    summariser[artnr] = {
                        icon_color: "green",
                        artikelnr: artnr,
                        aantal: aantal,
                        valbedrag: valbedrag,
                        method: this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].method
                        // this method determines the icon to be seen in the datatable on the right (the summery per item which is total amount for all kleur/maat)
                        //encounter first time: simply copy the method from this row. So the icon reflects the change on this single row

                    };

                }
                else {
                    if (summariser[artnr].method != "delete") {
                        summariser[artnr].aantal = summariser[artnr].aantal + aantal;
                        summariser[artnr].valbedrag = summariser[artnr].valbedrag + valbedrag;

                        if (existing[artnr] != undefined) {
                            if (aantal != oldaantal) {
                                summariser[artnr].method = "update";
                            }
                        }
                        else {
                            if (aantal != 0) {
                                summariser[artnr].method = "insert";
                            }

                        }


                        //else, if method = delete: do nothing. First row of this artnr was inserted in summary. Subsequent rows never change delete method
                    }
                }
            }
        }
        return summariser;
    }

    createlookup_userdata() {// create lookup object that hass an attribute for every row in the formdef bootstrapcolumn (data coming going db). 
        //The attribute (combi of item+kleur+maat) points to 
        //rownumber in bootstrapcolumns[x].row[?]

        var rowcount = 0;
        var rowvalues = [];
        var attribute_lookup = "";
        var _lookup_userdata = {};

        var btc = this.formdef["bootstrapcolumns"][this.btc_idx]
        for (rowcount = 0; rowcount < this.formdef["bootstrapcolumns"][this.btc_idx].rows.length; rowcount++) {
            rowvalues = this.formdef["bootstrapcolumns"][this.btc_idx].rows[rowcount].values;
            attribute_lookup = rowvalues[this.art_idx] + rowvalues[this.kleur_idx] + rowvalues[this.maat_idx];
            _lookup_userdata[attribute_lookup] = rowcount;

        }

        return _lookup_userdata;

    }


    getmatrixrows(art) {// creates the array that feeds the datatable to shows the matrix for entering amounts for a specific item. Data in bootstrapclumns[].rows are reflected    


        if (art.artkleur == null) {
            this.bError = true;
            this.sErrorMsg = "geen kleuren gedefinieerd in stamgegevens artikel, artikel kan niet worden gebruikt";
            return;
        }
        if (art.artmaat == null) {
            this.bError = true;
            this.sErrorMsg = "geen maten gedefinieerd in stamgegevens artikel, artikel kan niet worden gebruikt";
            return;
        }
        var _sourcerow = [];
        var artnr = "";
        var kleur = "";
        var maat = "";
        var maat_idx = 0;
        var _rows = [];
        var _cols = [];
        var index = 0;
        var _row = {};
        _cols.push("kleur");
        for (var i = 0; i < art.artmaat.length; i++) {
            _cols.push(art.artmaat[i]);

        }




        for (var i = 0; i < art.artkleur.length; i++) {
            _rows.push(this.creatematrixrow(art.artkleur[i], art.artmaat));
        }

        for (var i = 0; i < this.formdef["bootstrapcolumns"][this.btc_idx].rows.length; i++) {
            //_sourcerow=this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values;
            artnr = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.art_idx];
            kleur = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.kleur_idx];
            maat = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.maat_idx];
            if (artnr == art.artikelnr) {
                index = _rows.findIndex(_row => _row.kleur == kleur);
                if (index == -1) {
                    _rows.push(this.creatematrixrow(kleur, art.artmaat));
                    index = _rows.length - 1;
                }
                _rows[index][maat] = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.aantal_idx] * -1;
            }
        }


        this.matrixtitle = art.artikelnr;




        this.bhidevrrdbutton = false;
        this.matrixprijs = art.verkoopprijs;
        this.rowsmatrix = _rows;


        this.colsmatrix = _cols;
        this.button_ovt_label = "overzicht";


        this.bSummy = false;

    }

    creatematrixrow(kleur, maat) {
        var _row = new (rowdata);
        _row["kleur"] = kleur;
        for (var j = 0; j < maat.length; j++) {
            _row[maat[j]] = null;
        }
        return _row;

    }

    getDetailsMatrix(_tthis) { //go trough all datarows, make summary per item and put in object _summariser.
        //based on summariser: create the array that feeds the left datatable
        var _summariser = {};
        var _icon = "";
        var bedrag = 0;
        var totaantal = 0;
        var totbedrag = 0;
        _tthis.rowsvalues.length = 0;
        _tthis.iconRowHeader.length = 0;
        _summariser = this.createSummariser();
        _tthis.bDetailChanged = false;
        _tthis.bDetailEmpty = true;
        for (var attribute in _summariser) {
            var i = 0;
            _tthis.bDetailEmpty = false;
            bedrag =
                _summariser[attribute].valbedrag = _summariser[attribute].valbedrag.toFixed(2);
            _tthis.rowsvalues.push(_summariser[attribute]);
            if (_summariser[attribute].method != 'delete') {
                totaantal = totaantal + _summariser[attribute].aantal;
                totbedrag = totbedrag + Number(_summariser[attribute].valbedrag);
            }


            if (_summariser[attribute].method == 'update') {
                _icon = "fa fa-pencil";
                _tthis.bDetailChanged = true;
            }
            else if (_summariser[attribute].method == 'insert') {
                _icon = "fa fa-plus";
                _tthis.bDetailChanged = true;
            }
            else if (_summariser[attribute].method == 'delete') {
                _icon = "fa fa-trash";
                _tthis.bDetailChanged = true;
            }
            else {
                _icon = "fa fa-square";
            }
            _tthis.iconRowHeader.push(_icon)
        }
        _tthis.totals.length = 0;
        _tthis.totals.push(null);
        _tthis.totals.push(totaantal);
        _tthis.totals.push(totbedrag.toFixed(2));
        _tthis.lookup_userdata = this.createlookup_userdata();

        _tthis.disable_save = this.SetDisableSave();
        _tthis.set_iconcolors();
    }

    setmatrixrows_just_one_empty(artnr) {

        let artikel = this.findartikelbyartnr(artnr);
        let propertyname = artikel.artikelnr + artikel.artkleur[0] + artikel.artmaat[0];
        let index = this.lookup_userdata[propertyname];
        if (index == undefined) {
            index = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length;
            let rowvalues = new Array(this.formdef["bootstrapcolumns"][this.btc_idx].fielddefs.length);
            rowvalues[this.art_idx] = artikel.artikelnr;
            rowvalues[this.kleur_idx] = artikel.artkleur[0];
            rowvalues[this.maat_idx] = artikel.artmaat[0];
            rowvalues[this.aantal_idx] = null;
            rowvalues[this.valbedrag_idx] = null;
            rowvalues[this.not_counted_idx] = "0";
            this.formdef["bootstrapcolumns"][this.btc_idx].rows.push({ method: "", values: rowvalues, oldvalues: rowvalues });
            //this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].method = "insert";
            this.getDetailsMatrix(this);
        }

    }

    setmatrixrows() {// opposite of setmatrixrows. From the matrix where user entered amounts per kleur/maat for a specific item, this unput is copied into the formdef bootstrapcolumn[].rows
        var artnr = this.matrixtitle;//Call getDetailsMatrix to reflect the user input in the left matrix.  
        let bOk = true;
        var index = 0;
        var kleur = "";
        var aantal = 0;
        var vrrdaantal = 0;
        var propertyname = "";
        var method = null;
        var rowvalues = [];
        var oldrowvalues = [];
        //this.getvrrdmatrixrows();
        for (let i = 0; i < this.rowsmatrix.length; i++) {
            kleur = this.rowsmatrix[i].kleur;
            for (var maat in this.rowsmatrix[i]) {

                if (maat != "kleur" && bOk) {

                    aantal = this.rowsmatrix[i][maat];
                    if (isNaN(aantal)) {

                        this.sDialogMsg = this.rowsmatrix[i][maat] + " is geen geldig getal";

                        bOk = false;
                    }
                    else if (aantal < 0) {
                        this.sDialogMsg = "het aantal " + this.rowsmatrix[i][maat] + " is kleiner dan nul, niet toegestaan";

                        bOk = false;
                    }
                    else {
                        index = this.rowsvrrdmatrix.findIndex(vrrdart => vrrdart.kleur === kleur);
                        if (index >= 0) {
                            vrrdaantal = this.rowsvrrdmatrix[index][maat] * 1;
                            if (isNaN(vrrdaantal)) {
                                vrrdaantal = 0;
                            }
                            if (vrrdaantal < aantal && this.seizoen["isnalevering"] == "1") {
                                this.sDialogMsg = "het aantal " + aantal + " is groter dan de beschikbare voorraad van " + vrrdaantal;
                                bOk = false;
                            }
                        }
                    }
                }
                if (!bOk) {
                    i = 1000;

                }
            }
        }
        if (!bOk) {
            this.sDialogHeader = "invoerfout";
            this.bMessage = true;
            this.getmatrixrows(this.findartikelbyartnr(artnr));

        }
        else {
            for (let i = 0; i < this.rowsmatrix.length; i++) {
                kleur = this.rowsmatrix[i].kleur;
                for (var maat in this.rowsmatrix[i]) {

                    if (maat != "kleur") {
                        propertyname = artnr + kleur + maat;

                        aantal = this.rowsmatrix[i][maat] * -1;
                        index = this.lookup_userdata[propertyname];
                        //initional lookup_userdata is created after fetching from db. Its a mapping between the item/kleur/maat to rownumber 
                        //in the formdef that will be written to db after save.
                        if (index == undefined && aantal != 0 && aantal != null) {
                            index = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length;
                            rowvalues = new Array(this.formdef["bootstrapcolumns"][this.btc_idx].fielddefs.length);
                            oldrowvalues = new Array(this.formdef["bootstrapcolumns"][this.btc_idx].fielddefs.length);
                            rowvalues[this.art_idx] = artnr;
                            rowvalues[this.kleur_idx] = kleur;
                            rowvalues[this.maat_idx] = maat;
                            rowvalues[this.freenumfield1_idx] = this.matrixprijs;
                            rowvalues[this.aantal_idx] = 0;
                            rowvalues[this.valbedrag_idx] = 0;
                            oldrowvalues[this.aantal_idx] = 0;
                            oldrowvalues[this.valbedrag_idx] = 0;
                            if (this.NewArtIconColor == this.color_not_counted) {
                                rowvalues[this.not_counted_idx] = "1";
                            }
                            else {
                                rowvalues[this.not_counted_idx] = "0";
                            }

                            this.formdef["bootstrapcolumns"][this.btc_idx].rows.push({ method: "", values: rowvalues, oldvalues: oldrowvalues });

                            this.lookup_userdata[propertyname] = index;
                        }
                        if (index != undefined) {

                            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].method != "delete") {
                                method = null;
                                if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].values[this.rowid_idx] == null) {
                                    if (aantal != 0) {
                                        //rowid = null meaning that user added this in this same session, having pressed 'add' before   
                                        method = 'insert';
                                    }
                                }

                                else if (aantal != this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].oldvalues[this.aantal_idx]) {
                                    method = 'update';
                                    //so in case an existing row is not changed, method remains null
                                }
                                this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].method = method;
                            }


                            this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].values[this.aantal_idx] = aantal;
                            this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].values[this.valbedrag_idx] = (aantal * this.matrixprijs).toFixed(2);



                        }


                    }
                }


            }
        }
        this.getDetailsMatrix(this);

    }

    // set_iconcolors() {
    //     var artnr: string;
    //     var artnr2: string;
    //     var index: number;
    //     var _NotCounted= this.rowsvalues.filter(rowsvalue => {
    //         artnr=rowsvalue.artikelnr;
    //         index=this.formdef["bootstrapcolumns"][this.btc_idx].rows.findIndex(row => { 
    //             artnr2=row["values"][this.art_idx] ;
    //             if (artnr == artnr2 && row["values"][this.not_counted_idx]) return true},
    //             this);
    //         if (index>=0) return true;
    //         //return true;
    //     }, 
    //     this).map(rowsvalue=>rowsvalue.artikelnr);
    //     this.NotCounted=_NotCounted;

    // }

    set_iconcolors() {
        var artnr: string;
        var artnr2: string;
        var index: number;
        var _colors = this.rowsvalues.forEach(rowsvalue => {
            artnr = rowsvalue.artikelnr;
            index = this.formdef["bootstrapcolumns"][this.btc_idx].rows.findIndex(row => {
                artnr2 = row["values"][this.art_idx];

                if (artnr == artnr2 && row["values"][this.not_counted_idx] == "1") return true
            },
                this);
            if (index >= 0) rowsvalue.icon_color = "red";
        }, this)
    }

    TotalVrrdForArtikel(artnr) {
        var art_idx = 0;
        var dim1waarde_idx = 1;
        var dim2waarde_idx = 2;
        var vrrdecono_idx = 3;
        var vrrdtech_idx = 4;
        let vrrd = 0;
        let totvrrd = null;
        if (this.all_voorraad != null) {
            let startindex = this.all_voorraad["rows"].findIndex(row => row.values[art_idx] == artnr);
            if (startindex != -1) {
                for (var j = startindex; j < this.all_voorraad["rows"].length; j++) {
                    if (this.all_voorraad["rows"][j].values[art_idx] == artnr) {
                        let vrrd = Number(this.all_voorraad["rows"][j].values[vrrdecono_idx]);
                        if (!isNaN(vrrd)) {
                            totvrrd = totvrrd + vrrd;
                        }

                    }
                    else {
                        j = 100000;
                    }
                }
            }
            if (totvrrd < 0) {
                totvrrd = 0;
            }
        }

        return totvrrd
    }


    getvrrdmatrixrows() {// creates the array that feeds the datatable to shows the voorraad     

        if (this.bOffLine) {
            return;
        }

        var row = null;
        var kleur = null;
        var voorraad = null;
        var startindex;
        var art_idx = 0;
        var dim1waarde_idx = 1;
        var dim2waarde_idx = 2;
        var vrrdecono_idx = 3;
        var vrrdtech_idx = 4;
        var _row = {};
        var _rows = [];
        this.voorraadtitle = "de totale voorraad van " + this.matrixtitle + " is " + this.TotalVrrdForArtikel(this.matrixtitle);
        startindex = this.all_voorraad["rows"].findIndex(row => row.values[art_idx] == this.matrixtitle);
        let art =

            this.bCounted = this.all_art_is_counted.indexOf(this.matrixtitle) >= 0 || this.seizoen["isnalevering"] != 1;
        // this.rowsvrrdmatrix= Object.assign({},this.rowsmatrix);
        this.rowsvrrdmatrix.length = 0;
        var _tthis = this;
        this.rowsmatrix.forEach(row => {
            _row = new (rowdata);

            for (var attribute in row) {
                if (attribute == "kleur") {
                    kleur = row[attribute]
                    _row[attribute] = kleur;
                }
                else {
                    if (startindex != -1) {
                        for (var j = startindex; j < this.all_voorraad["rows"].length; j++) {
                            if (_tthis.all_voorraad["rows"][j].values[art_idx] == _tthis.matrixtitle && _tthis.all_voorraad["rows"][j].values[dim1waarde_idx] == kleur
                                && _tthis.all_voorraad["rows"][j].values[dim2waarde_idx] == attribute) {
                                _row[attribute] = _tthis.all_voorraad["rows"][j].values[vrrdecono_idx];
                                j = 100000;
                            }
                        }
                    }
                }
            }
            _rows.push(_row);
        });

        this.voorraadtitle = "de totale voorraad van " + this.matrixtitle + " is " + this.TotalVrrdForArtikel(this.matrixtitle);
        if (!this.bCounted) {
            this.voorraadtitle = this.voorraadtitle + " (onder voorbehoud)"
        }
        this.rowsvrrdmatrix = _rows;
        var artikel = this.findartikelbyartnr(this.matrixtitle)
        let _seizoen = this.all_seizoen["rows"].find(row => row.values[0] == artikel.seizoen);
        this.bnaleveren = false;
        this.voorraad_id = "";
        if (_seizoen != undefined) {
            if (_seizoen.values[3]) {
                this.bnaleveren = true;
                if (this.all_art_is_counted.indexOf(this.matrixtitle) >= 0) {
                    this.voorraad_id = "voorraadcounted";
                }
                else {
                    this.voorraad_id = "voorraadnotcounted";
                }

            }
            else {
                if (_seizoen.values[0] = "Basic") {
                    this.voorraad_id = "voorraadbasic";
                }
                else if (_seizoen.values[1] = "") {
                    this.voorraad_id = "voorraadcrnt";
                }
            }

        }
    }

    onRowClick(event) {
        this.getmatrixrows(this.findartikel(event.data));

        this.getvrrdmatrixrows();


    }

    celledit(event) {
        event.data[event.column.field]++;

    }

    startCellEdit(event) {
        this.keepEvent = event;
        this.column_ID = event.column.field;

    }

    addOne(x) {
        if (x.deltaY < 0) {
            this.keepEvent.data[this.column_ID]++;
        }
        else if (this.keepEvent.data[this.column_ID] > 0) {
            this.keepEvent.data[this.column_ID]--;
        }


        x.stopPropagation(x);
        //event.data[event.column.field]++;
    }

    delete_null_rows_from_formdef() {
        for (let i = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length - 1; i >= 0; i--) {

            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.rowid_idx] == undefined &&
                (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.valbedrag_idx] == null ||
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.valbedrag_idx] == 0)) {
                this.formdef["bootstrapcolumns"][this.btc_idx].rows.splice(i, 1);
            }
        }
    }


    deleteItem(yesorno) {
        let allitems_removed = true;
        this.bDialog_NeeJa = false;
        this.sDialogMsg = "";
        var deletesetting = null;
        if (yesorno) {
            deletesetting = "delete";
        }
        else {
            deletesetting = null;
        }
        for (let i = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length - 1; i >= 0; i--) {
            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.art_idx] == this.matrixtitle) {
                if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].oldvalues[this.aantal_idx] != null &&
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].oldvalues[this.aantal_idx] != 0) {
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].method = deletesetting;
                    allitems_removed = false;
                }
                else {
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows.splice(i, 1);
                }
            }
        }




        //this.setmatrixrows();


        if (allitems_removed) {
            this.rowsmatrix.length = 0;
        }
        this.getDetailsMatrix(this);

    }

    SetDisableSave() {

        this.bChanged = (this.bKopChanged && !this.bDetailEmpty) || this.bDetailChanged;
        return !(this.bChanged && this.kopForm.valid && this.adresForm.valid && !this.bBevestigd);

    }

    CheckInput(control: FormControl) {
        var i = 0;
    }

    ClearNwArtikel() {

        this.detailForm.get("nwartikel").setValue("");

    }

    SeizoenExists(control: FormControl) {

        if (control["oldvalue"] != control.value) {

            if (this.all_seizoen["rows"].length > 0) {
                if (!this.find_seizoen(control.value)) {
                    this.detailForm.controls["nwartikel"].reset({ value: null, disabled: true });

                    return {
                        "seizoen niet ingevuld of ongeldig": true
                    };
                }
                else {
                    control["oldvalue"] = control.value;
                }
            }
            this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });

            return null;
        }

    }

    EmailCheck(control: FormControl) {
        if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
            return {
                " ongeldig": true
            };
        }
    }

    FormatCheck(fieldname, minlen, format) {
        return function (control: FormControl) {
            if (format.length < 4 || control.value.length == 0) {
                return null;
            }
            if (control.value.length < minlen) {
                let msg = "de lengte van " + fieldname + " is kleiner dan de minimale " + minlen + " tekens";

                return { [msg]: true };
            }
            var check = new RegExp(format);

            let bError = !check.test(control.value);
            if (bError) {
                let msg = " is ongeldig";
                return { [msg]: true };
            }
            else return null;

        }
    }

    MaxLenCheck(maxlen: number) {
        return function (control: FormControl) {
            if (control.value.length > maxlen) {
                let msg = "lengte " + control.value.length.toString() + " is groter dan toegestane " + maxlen.toString() + " tekens";
                return {
                    [msg]: true
                };
            }
        }.bind(this);
    }

    showtooltip(event) {
        let id = event.currentTarget.id;
        if (id == "clientname") {
            if (this.bHideToolTip) {
                this.sToolTip = "dubbelklik  hier om tooltips in te schakelen";
            }
            else {
                this.sToolTip = "dubbelklik hier om tooltips uit te schakelen";
            }
        }

        else {

            if (this.bHideToolTip) return;
            this.sToolTip = "";
            switch (id) {
                case "nieuwartikel":
                    {
                        this.sToolTip = "type nieuw artikelnummer of dubbelklik voor foto's"
                    }
                    break;

                case "clear":
                    {
                        this.sToolTip = "wis alle inhoud van dit scherm";
                    }
                    break;
                case "search":
                    {
                        this.sToolTip = "vind alle orders met de waardes zoals die zijn ingevuld op het scherm";
                    }
                    break;
                case "overzicht":
                    {
                        if (!this.bSummy) {
                            this.sToolTip = "voer de bestelling in voor artikel " + this.matrixtitle + ". Klik voor het overzicht van alle bestelde artikelen. Je kunt dan de bestelling niet aanpassen";
                        }
                        else {
                            this.sToolTip = "klik om de bestelling aan te passen";
                        }
                    }
                    break;
                case "excel":
                    {

                        if (!this.bSummy) {
                            this.sToolTip = "met deze knop kun je de gegevens copieren naar Excel. Maar klik eerst op de knop 'overzicht'";
                        }
                        else {
                            this.sToolTip = "copieer de inhoud van dit scherm naar het clipboard / klembord. Open dan Excel en paste / ctrl+V";
                        }
                    }
                    break;

                default:
                    {
                        let btcindex = 0;
                        let index;
                        for (btcindex = 0; btcindex < this.visible_fields.length; btcindex++) {
                            index = this.visible_fields[btcindex].findIndex(field => field.name == id);

                            if (index >= 0) break;
                        }
                        if (index == -1) {
                        }
                        else {
                            this.sToolTip = this.formdef["bootstrapcolumns"][btcindex].fielddefs[this.visible_fields[btcindex][index].field_idx].tooltip;
                        }
                    }
                    break;




            }
        }




        if (this.sToolTip != null) {
            this.tttop = event.currentTarget.getBoundingClientRect().top + "px";
            this.ttleft = event.currentTarget.getBoundingClientRect().right + "px";

            this.bToolTipHide = false;
        }


        this.timeout_id = setTimeout(() => { this.bToolTipHide = true; }, 3000)
    }

    hidetooltip() {

        this.bToolTipHide = true;
        clearTimeout(this.timeout_id);

    }

    toggle_tooltip() {
        this.bHideToolTip = !this.bHideToolTip;
        window.localStorage.setItem('bHideToolTip', this.bHideToolTip.toString());
    }





    GetAdres(control: FormControl) {

        if (!control.pristine) {
            let check = /^[0-9]{4}[A-Z]{2}$/;
            if (!check.test(control.value))
                return ({
                    ongeldig: true
                })
            var PostcodeObservable = this.PostcodeApi(control.value);



            PostcodeObservable.subscribe(response => {

                var data = response.json();
                var headers = response.headers;
                if (data._embedded.addresses.length > 0) {
                    this.adresForm.get("straat").setValue(data._embedded.addresses[0].street);
                    this.adresForm.get("woonplaats").setValue(data._embedded.addresses[0].city.label);
                }
                else {
                    this.adresForm.get("straat").setValue(null);
                    this.adresForm.get("woonplaats").setValue(null);
                }
                control.markAsPristine()
                //control.setValue(control.value.toUpperCase())
                return null;
            },
                error => {
                    this.sErrorHeader = "ophalen postcode mislukt";
                    this.bError = true;
                    switch (error.status) {
                        case 429:
                            this.sErrorMsg = "limiet overschreden, response status " + error.status;
                            break;
                        default:
                            this.sErrorMsg = "response: " + error.status;
                            break;
                    }
                });
        }




    }





    PostcodeApi(postcode: string) {

        if (postcode.length == 6) {
            var headers = new Headers();
            headers.append('X-Api-Key', 'IqaKLykXtV5zAbpCIMALK1h9FttdLgvD6xRSdySu');
            // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
            // headers.append('Accept', 'q=0.8;application/json;q=0.9');
            let _url = "https://postcode-api.apiwise.nl/v2/addresses/?postcode=" + postcode;
            // return this.http.get(_url, { headers: headers }).
            //     map(res => res.json())
            return this.http.get(_url, { headers: headers });
        }

    }

    createArtGallery() {
        let _tthis = this;
        this.sGalleryHeader = "artikelen seizoen " + this.kopForm.controls["seizoen"].value;
        this.artgallery = this.all_art
            .filter(artikel =>
                (artikel.seizoen === this.kopForm.controls["seizoen"].value || artikel.seizoen == "Basic"))
            .map(function (artikel) {
                //  let voorraad = _tthis.TotalVrrdForArtikel(artikel.artikelnr);
                let omschr = artikel.omschr;
                if (artikel.omschr == " ") omschr = artikel.artikelnr;
                return {
                    artnr: artikel.artikelnr,
                    omschr: omschr,
                    voorraad: null
                }
            });
    }

    updateArtGalleryVoorraad() {

        this.artgallery.forEach(art => {
            art.voorraad = this.TotalVrrdForArtikel(art.artnr);
        })
    }

    find_seizoen(searchargument) {
        if (this.oldSeizoen == searchargument || searchargument == "") {
            this.bSeizoenIsValid = true;
            return true;
        }
        if (this.all_seizoen["rows"].length == 0) { return false }
        this.seizoen = {};
        var index = this.all_seizoen["rows"].findIndex(row => row.values[0] == searchargument);
        if (index >= 0) {
            for (var fieldcount = 0; fieldcount < this.all_seizoen["fields"].length; fieldcount++) {
                this.seizoen[this.all_seizoen["fields"][fieldcount]] = this.all_seizoen["rows"][index]["values"][fieldcount];
            }
            let year = parseInt(this.all_seizoen["rows"][index]["values"][1].substr(0, 4));
            let month = parseInt(this.all_seizoen["rows"][index]["values"][1].substr(5, 2)) + 1;
            let day = parseInt(this.all_seizoen["rows"][index]["values"][1].substr(8.2));
            if (!isNaN(year) && !isNaN(month) && !isNaN(day)) { }
            this.seizoen["enddate"] = new Date(year, month, day);
            this.bSeizoenIsValid = true;
            this.oldSeizoen = searchargument;
            this.createArtGallery();
            this.updateArtGalleryVoorraad();




            if (this.bArtikelenFetched) {
                this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });
            }
            return true;
            //*** this.bKopChanged=true;
        }
        else {
            this.detailForm.controls["nwartikel"].reset({ value: null, disabled: true });
            this.bSeizoenIsValid = false;
            return false;
        }

    }

    CreateGalleryItem(artikel) {
        return { artnr: artikel.artikelnr };
    }

    KlantExists(control: FormControl) {


        if (!this.kopForm.pristine && control.value.length >= 3) {

            let this_klant = this.all_klant["rows"].find(row => row.values[1] == control.value);
            if (this_klant == null) {
                // this.clearklant(1);
                return {
                    "niet bestaande klant": true
                };
            }
            else {
                this.bValidatingFromAutocomplete = true;
                this.populate_relatie(this_klant);
                return null;
            }
        }

    }

    SaveToLocalTextFile() {
        var data = new Blob([" hi there"], { type: 'text/plain' });

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (this.textFile !== null) {
            window.URL.revokeObjectURL(this.textFile);
        }

        this.textFile = window.URL.createObjectURL(data);

    };



    Excel() {
        if (this.rowsmatrix.length == 0) {
            this.bError = true;
            this.sErrorHeader = "boodschap excel";
            this.sErrorMsg = "order is leeg, Excel kan niet worden gemaakt";
            return;
        };
        let sCSV = "";
        let fieldvalue = "";
        let btcdetail = -1;
        let field_countmax = -1;
        let column_count = 0;
        let visible_fieldcount = 0;
        let btcfield_countmax = 0;
        let visible_fields = [];
        this.copyFormControlsToFormDef(true, false, this.visible_fields);
        this.copyFormControlsToFormDef(true, false, this.visible_klantfields);
        let naam = this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value.replace("\n", ",  ");

        for (let btccount = 0; btccount < this.formdef["bootstrapcolumns"].length; btccount++) {
            if (!this.formdef["bootstrapcolumns"][btccount].detail) {
                btcfield_countmax = 0;
                visible_fields.push([]);
                for (let fieldcount = 0; fieldcount < this.formdef["bootstrapcolumns"][btccount]["fielddefs"].length; fieldcount++)
                    if (!this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].hidden &&
                        this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].name != "naam" &&
                        this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].name != "bcomplete" &&
                        this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].name != "valbedrag") {
                        visible_fields[btccount].push([this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].title, this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].value]);
                        btcfield_countmax++;
                    }

                if (btcfield_countmax > field_countmax) {
                    field_countmax = btcfield_countmax;
                }
            }
            else {
                btcdetail = btccount;
            }

        }

        sCSV = " Order voor\t" + naam + "\t\t" + "Order_" + this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.ordernr_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.datum_idx].value + "\r\n" + "\r\n";

        for (let fieldcount = 0; fieldcount < field_countmax; fieldcount++) {
            for (let btccount = 0; btccount < visible_fields.length; btccount++) {
                if (fieldcount < visible_fields[btccount].length) {
                    sCSV = sCSV + visible_fields[btccount][fieldcount][0] + "\t";

                    if (visible_fields[btccount][fieldcount][1] != null) {
                        sCSV = sCSV + visible_fields[btccount][fieldcount][1].replace("\n", "  ") + "\t";
                    }
                    else {
                        sCSV = sCSV + "\t";
                    }


                }
            }

            sCSV = sCSV + "\r\n";
        }

        sCSV = sCSV + "\r\n" + "\r\n";
        let sRow = "";

        for (let rowcount = 0; rowcount < this.rowsmatrix.length; rowcount++) {
            for (let field in this.rowsmatrix[rowcount]) {
                if (this.rowsmatrix[rowcount][field] != null)
                    sCSV =
                        sCSV + this.rowsmatrix[rowcount][field] + "\t";
                else {
                    sCSV = sCSV + "\t";
                }
                if (rowcount == 0) {
                    column_count++
                }
            }
            sCSV = sCSV + "\r\n";
            if (rowcount == 0) {
                sCSV = sCSV + "\r\n";
            }
        }

        for (let i = 0; i < column_count - 2; i++) {
            sCSV = sCSV + "\t";
        }
        for (let i = 1; i < this.totals.length; i++) {
            sCSV = sCSV + this.totals[i] + "\t";
        }

        sCSV = sCSV + "\r\n" + "\r\n";
        sCSV = sCSV + "bestandnaam" + "\t\t" + "Order_" + this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.ordernr_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.datum_idx].value + "\r\n" + "\r\n";





        var aux = document.createElement("textarea");
        aux.setAttribute("id", "txtscsv");
        aux.value = sCSV;
        document.body.appendChild(aux);

        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);














        var CsvFile = "data:text/csv;base64," + window.btoa(sCSV);
        window.open(CsvFile, '_blank')
        var i = 1;
    }

}

class rowdata { };

class pair {
    btcindex: number;
    fieldindex: number;
}

interface user {
    relatienr?: string;
    dbname?: string;
    naam_plaats?: string
    email?: string;
    agentnr?: string;
    boekdag?: string;
    boekperiode?: string;
    boekjaar?: string;
    role?: string;
    bedrijfnr?: string;
    landcode?: string;
    loginstatus?: string;
    message?: string;
    defaults?: [{ pair: string[] }];
}

interface field {
    name: string,
    tbname: string,
    title: string,
    type: string,
    minlen: number,
    maxlen: number,
    format: string,
    //width: field.width+"%",
    width: string,
    getsfocus: boolean,
    required: boolean,
    disabled: number,
    haslistbox: boolean,
    popup_windowname: string,
    tooltip: string;
    lbcount: number,
    btc_idx: number,
    field_idx: number,
}

type tbversion = {
    artikelen?: number,
    relatie?: number,
    adres?: number,
    seizoen?: number,
    blank_order?: number,
    blank_artikel?: number
}

type artgallery = [{
    artnr: string,
    voorraad?: number
}]

type adres_item = {
    label: string,
    value?: {}

}



