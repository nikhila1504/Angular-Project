import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womensub',
  templateUrl: './womensub.component.html',
  styleUrls: ['./womensub.component.css']
})
export class WomensubComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show Details';
  public show1: boolean= false;
  public buttonNam:any = 'Show Details';
  public buttonNa:any = 'Show Details';
  public buttonN:any = 'Show Details';
  public show2: boolean= false;
  public show3: boolean= false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
    if(this.show)  
    //   this.buttonName = "Hide Details";
    // else
      this.buttonName = "Show Details";
  }
  toggle1() {
    this.show1 = !this.show1;
    if(this.show1)  
    //   this.buttonNam = "Hide Details";
    // else
      this.buttonNam = "Show Details";
  }
  toggle2() {
    this.show2 = !this.show2;
    if(this.show2)  
    //   this.buttonNam = "Hide Details";
    // else
      this.buttonNa = "Show Details";
  }

  toggle3() {
    this.show3 = !this.show3;
    if(this.show3)  
    //   this.buttonNam = "Hide Details";
    // else
      this.buttonN = "Show Details";
  }



}
