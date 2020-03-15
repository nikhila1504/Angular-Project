import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Seller } from '../model/seller';
import { SellerService } from '../service/seller.service';
import { User } from '../model/user';

@Component({
  selector: 'app-sregistration',
  templateUrl: './sregistration.component.html',
  styleUrls: ['./sregistration.component.css']
})
export class SregistrationComponent implements OnInit {
  users=new User(1,"","","","","");
  seller:Seller;
  msg:string;
  isNew:boolean;

 constructor(
    private sellerService:SellerService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
     if(id){
       this.isNew=false;
       this.sellerService.getById(id).subscribe(
         (data)=>{
          this.seller=data;
        }
      );
    }else{
      this.isNew=true;
      this.seller={
        id:0,
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    mobileno:"",

      };
    }
  }
  save() {
    let ob: Observable<Seller>;

    if (this.isNew) {
      ob = this.sellerService.add(this.seller);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("/seller");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }


}
