import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../model/users';
import { Buylog } from '../model/buylog';
import { LserviceService } from '../service/lservice.service';
import { Ulogin } from '../model/ulogin';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  buyer=new Buylog("","");
  user:Ulogin 
  msg: string;
  isNew: boolean;
  

  constructor(private userService: LserviceService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let userId = this.actRoute.snapshot.params.id;

    if (userId) {
      this.isNew = false;
      this.userService.getById(userId).subscribe(
        (data) => {
          this.user = data;
        }
      );
    } else {
      this.isNew = true;
      this.user = {
        userId: 0,
        userName: '',
        userpassword: '',
       
      };
    }

  }
  signIn(){
    // alert("tgyhuj");
    if(localStorage){
      var name=(<HTMLInputElement>document.getElementById("userName")).value;
      localStorage.setItem("userId",name);
      let id=localStorage.getItem("userId");
      this.router.navigateByUrl("bl");
    }
   }
  
}	

