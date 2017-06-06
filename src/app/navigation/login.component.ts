import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServerConstants } from '../services/constants.on_server';





@Component({
    selector: 'login',

    templateUrl: './login.html',

})
export class login implements OnInit {

    @Output() LoggedIn = new EventEmitter<user>();
    @Output() OfflineInit = new EventEmitter();
    qtService;
    bLoggedIn = false;
    bConnected = false;
    hideOffline = true;
    bpassworderror = false;

    sc: ServerConstants;
    loginctrl;
    relatienr = "0";
    requiraqe;
    hide = true;
    bHidePasswordControle = true;
    sLoginBanner = "Login";
    sLoginLabel = "Login";
    sErrorMsg;
    loginForm = new FormGroup({});
    constructor(private fb: FormBuilder, private http: Http, private _sc: ServerConstants) {
        this.loginctrl = fb.group;
        this.sc = _sc;
        if (!/localhost/.test(document.location.host)) {
           // enableProdMode();
        }
        // this.buildForm;

    }




    ngOnInit(): void {
        this.hideOffline = window.localStorage.getItem('user') == null;
        this.checkconnection();
        this.buildForm();
    }



    buildForm() {

        var _ctrls = {};
        _ctrls["email"] = ['', Validators.required];
        _ctrls["password"] = ['', Validators.required];
        _ctrls["password_controle"] = [{ value: '', disabled: true }];

        this.loginForm = this.fb.group(_ctrls, { validator: this.compare_password });

    }

    compare_password(ctrl) {
        if (ctrl != undefined) {
            if (!ctrl.get("password_controle").disabled) {
                if (ctrl.get("password").value != ctrl.get("password_controle").value) {
                    return { "passwoorden stemmen niet overeen": true };
                }
                // else {
                //     ctrl.parent.get("password").errors=null;
                //     ctrl.parent.get("password_controle").errors=null;

                // }
            }

        }


    };

    checkconnection() {
        var _url = this.sc.loginurl + 'api/check_connection';
        var _tthis = this;

        this.http.get(_url, { headers: this.sc.headers }).
            map(res => res.json()).subscribe(data => {

                if (data == "connected") {
                    _tthis.bConnected = true;
                }
            },
            error => {
                this.sErrorMsg = "fout, status is" + error.status
            });
    }

    login(event) {

        var _url = this.sc.loginurl + 'api/login';
        //var headers = new Headers();
        var _tthis = this;
        this.sErrorMsg = "";
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');



        var name = this.loginForm.value;
        let loginstring = this.loginForm.controls["email"].value;
        if (this.bHidePasswordControle) {

            var body = JSON.stringify({
                "email": this.loginForm.controls["email"].value, "password": this.loginForm.controls["password"].value,
                "password_controle": ""
            });
        }
        else {
            var body = JSON.stringify({
                "relatienr": this.relatienr,
                "email": this.loginForm.controls["email"].value, "password": this.loginForm.controls["password"].value,
                "password_controle": this.loginForm.controls["password_controle"].value
            });
        }

        if (loginstring.substring(0, 4) == "test") {
            debugger;
            let logindata: user = {
                relatienr: "0",
                email: "tester@test.nl",
                naam_plaats:  "tester",
                dbname: "mockdata in project",
                role: "admin",
                defaults: [{ "pair": ["seizoen", "2017 Voorjaar"] }, { "pair": ["verkoopjn", "1"] }]

            };
            _tthis.LoggedIn.emit(logindata);
            _tthis.bLoggedIn = true;

        }
        else {
            this.http.post(_url, body, { headers: this.sc.headers }).
                map(res => res.json()).subscribe((data) => {
                    let strDummy = JSON.stringify(data);

                    if (data == null) {

                    }
                    else if (data.loginstatus == -1) {
                        _tthis.sErrorMsg = data.message;
                    }
                    else if (data.loginstatus == -2) {
                        _tthis.sLoginBanner = data.message;
                        _tthis.sLoginLabel = "Passwoord aanpassen";
                        _tthis.bHidePasswordControle = false;
                        _tthis.relatienr = data.relatienr;
                        _tthis.loginForm.get("password_controle").reset({ value: '', disabled: false }, this.compare_password)

                    }
                    else if (data.loginstatus == -3) {
                        _tthis.sLoginBanner = "Onverwachte fout in de database";
                    }
                    else if (data.loginstatus == "0") {
                        _tthis.sLoginLabel = "Login";
                        _tthis.bHidePasswordControle = true;
                    }
                    else if (data.loginstatus == "Ok") {
                        _tthis.LoggedIn.emit(data);
                        _tthis.bLoggedIn = true;
                    }
                });
        }



    }

    offlineinit() {
        let email = this.loginForm.controls["email"].value;
        this.OfflineInit.emit(email);
    }

    errorclear() {
        this.sErrorMsg = "";

    }

    LoginDisabledMsg() {
        if (!this.loginForm.valid) {
            this.sErrorMsg = "passwoorden zijn niet gelijk";
        }
        else {
            this.sErrorMsg = "";
        }
        var i = 0;
    }
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