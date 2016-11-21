import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{ routing } from '../app.routing';


import { User } from '../models/user';
import { RegisterService } from '../services/register.service';


@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
    
})
export class RegisterComponent {
    newUser: User = new User();
    registered: boolean = false;


    constructor(private registerService: RegisterService,
    private _routes : Router, private _actiroute:ActivatedRoute) { }

    onSubmit() {
        console.log("register submit test");
        this.registerService.sendUser(this.newUser)
            .subscribe(data => {
                this.registered = true;
                this.newUser = new User();
                this._routes.navigate[('/home')],
                console.log("getting here after routing")
            },
            error => console.log(error))

    }
}