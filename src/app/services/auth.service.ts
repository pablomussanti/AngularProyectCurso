import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(localStorage.getItem("login")?true:false)
  constructor() { }
  login(){

    this.authenticationState.next(true)
    localStorage.setItem("login","string")
  }
  logout(){
    this.authenticationState.next(false)
    localStorage.removeItem("login")
  }
  islogin(){
    return this.authenticationState
  }
  isloginvalue(){
    return this.authenticationState.value
  }
}
