import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDetails } from '../models/userDetails';

const BASE_URL = 'http://localhost:3000';

const BASE_URL2 = 'http://localhost:3000/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { }

  login = (_username:string, _password: string) => {}

  /**
   * Method to get the User ID after the login
   * @param _id : User iD
   * @returns Observable containing details about individual User
   */

  getUserOverview = (_id:number): Observable<any> => {
    return this.httpClient.get<UserDetails>(`${BASE_URL2}/${_id}`);
  }


}
