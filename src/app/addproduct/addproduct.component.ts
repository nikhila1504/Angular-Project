import { Component, OnInit } from '@angular/core';

import { AddproductService } from '../service/addproduct.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Addproduct } from '../model/addproduct';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  ap:Addproduct ;
  msg:string;
  isNew:boolean;

  constructor(private apService:AddproductService ,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.apService.getById(id).subscribe(
        (data)=>{
         this.ap=data;
       }
     );
   }else{
     this.isNew=true;
     this.ap={
       id:0,
   name:"",
   category:"",
   discount:0,
   categoryid:0,
   price:0,
   stock:0
     };
   }
 }
 save() {
   let ob: Observable<Addproduct>;

   if (this.isNew) {
     ob = this.apService.add(this.ap);
   }
   ob.subscribe(
     (data) => {
       
       this.router.navigateByUrl("/dp");
     },
     (errResponse) => {
       this.msg = errResponse.error;

     }
   );
   alert('product added');

 }


}

