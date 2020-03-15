import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ulogin } from '../model/ulogin';
import { LserviceService } from '../service/lservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    if(localStorage){
      var name=(<HTMLInputElement>document.getElementById("userName")).value;
      localStorage.setItem("userId",name);
      let id=localStorage.getItem("userId");
      this.router.navigateByUrl("");
    }
  }
  
}	
