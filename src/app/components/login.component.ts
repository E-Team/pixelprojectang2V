import {Component} from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers:[LoginService]
})
export class LoginComponent {
  private model = {'username':'', 'password':''};
  private currentUserName;

  constructor (private loginService: LoginService){
    this.currentUserName=localStorage.getItem("currentUserName");
  }

  getUsername(){
    return this.currentUserName;
  }

  onSubmit() {
    console.log("In submit");
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
                localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
                this.loginService.sendToken(localStorage.getItem("token")).subscribe(
                  data => {
                            this.currentUserName=this.model.username;
                            console.log("Current USER is : " + this.currentUserName);
                            localStorage.setItem("currentUserName", this.model.username);
                            this.model.username='';
                            this.model.password='';
                            console.log("Checking Login data");
                          },
                       
                  error => console.log(error + ": 1st")
                  
                );
              },
      error => console.log(error + ": 2nd")
    );

  }


}