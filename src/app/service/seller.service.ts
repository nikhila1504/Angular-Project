import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../model/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9098/users/users";
   }
   getAll() : Observable<Seller []>{
    return this.httpClient.get<Seller []>(this.baseUrl);
   }
   getById(id:number) : Observable<Seller >{ 
    return this.httpClient.get<Seller >(`${this.baseUrl}/${id}`);
   }
   add(seller:Seller ) : Observable<Seller >{
     return this.httpClient.post<Seller >(this.baseUrl,seller);
   }
  }
