import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ulogin } from '../model/ulogin';

@Injectable({
  providedIn: 'root'
})
export class LserviceService {

  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9090/users/users";
   }
   getAll() : Observable<Ulogin []>{
    return this.httpClient.get<Ulogin []>(this.baseUrl);
   }
   getById(id:number) : Observable<Ulogin>{ 
    return this.httpClient.get<Ulogin >(`${this.baseUrl}/${id}`);
   }
   add(user:Ulogin ) : Observable<Ulogin >{
     return this.httpClient.post<Ulogin >(this.baseUrl,user);
   }
  }
 