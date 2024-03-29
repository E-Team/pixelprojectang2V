import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  myLocalStorage;

  constructor(private loginService: LoginService) {
    this.myLocalStorage = localStorage;

  }


  onClick() {

    if (this.loginService.checkLogin) {
      this.loginService.logout();
    }

  }

}
