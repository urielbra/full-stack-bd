import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate() {
    if (localStorage.getItem("loggedIn")=="true"){
        return true;
    }
    this.router.navigate(['/login']); 
    return false;
  }
}