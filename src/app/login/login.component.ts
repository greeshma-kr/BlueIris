import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!:string;
  password!:string;
  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    const logindata  = new User(this.user,this.password)
    if(!this.authService.authenticate(logindata)){
      this.router.navigate(['/login']);
    }
   
  }
}
