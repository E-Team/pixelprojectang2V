import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class LoginService {

    constructor(private _http: Http) {
     }

    sendCredentials(model){
        let tokenUrl = "http://localhost:8080/user/login";
        let header = new Headers({'Content-Type': 'application/json'});
        return this._http.post(tokenUrl, JSON.stringify(model),{headers: header});
    }

    sendToken(token){
         let tokenUrl = "http://localhost:8080/services/user/users";
         console.log('Bearer: ' + token);
         let getHeaders = new Headers({'Authorisation': 'Bearer'+ token})
         return this._http.get(tokenUrl,{headers:getHeaders});
    }

    logout(){
        localStorage.setItem("token","");
        localStorage.setItem("currentUserName","");
        
    }

    getUsername(){
        return localStorage.getItem("currentUserName");
    }

    checkLogin(){
        if(localStorage.getItem("currentUserName")!=''
        && localStorage.getItem("currentUserName")!=null
        && localStorage.getItem("token")!=''
        && localStorage.getItem("token")!=null){
            return true;
        
        }else{
            return false;
        }
    }
}