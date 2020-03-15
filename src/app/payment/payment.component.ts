import { Component, OnInit } from '@angular/core';
import { Pay } from '../model/pay';
import { PayService } from '../service/pay.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pays } from '../model/pays';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  pays=new Pays("","",1);
  payment:Pay ;
  msg:string;
  isNew:boolean;

 constructor(
   private pay:PayService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    let cvv=this.actRoute.snapshot.params.cvv;
     if(cvv){
       this.isNew=false;
       this.pay.getById(cvv).subscribe(
         (data)=>{
          this.payment=data;
        }
      );
    }else{
      this.isNew=true;
      this.payment={
        name:"",
        cardno:"",
        cvv:0,

      };
    }
  }
  save() {
    let ob: Observable<Pay>;

    if (this.isNew) {
      ob = this.pay.add(this.payment);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("/pays");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
    console.warn('Your order has been submitted');
  }

}
