import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDetails } from '../models/userDetails';
import { Router } from '@angular/router';

const BASE_URL = 'http://localhost:3000';

const BASE_URL2 = 'http://localhost:3000/user';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router:Router) { }

  private mockedUser = new User('greeshKr', "test123")
  isAuthenticated = false;



  authenticate(_logindata: User): boolean {
    if (this.checkCred(_logindata)) {
      this.isAuthenticated = true;
      this.router.navigate(['/home']);
      return true;

    }
    this.isAuthenticated = false;
    //alert("Please enter correct Login Credential.")
    return false;
  }

  private checkCred(_logindata: User): boolean {
          return this.checkUser(_logindata.getUser()) && this.checkPassword(_logindata.getPassword());
  }
  private checkUser(email: string): boolean {
      return email===this.mockedUser.getUser();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

  
  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}