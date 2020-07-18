import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display:boolean=false;
  ok:boolean=false;
  box:boolean=false;
  currentUser:string;
  friends:any[];
  msgSendConfirmation: boolean=false;;
  constructor(private us:UsersService) { }

  ngOnInit() {
    this.friends=this.us.users;
 
 
  }
  whenSubmitted(credentials:any){
       console.log(credentials.username)
               if((credentials.username=="imran")&&(credentials.pswd=="imran")){
                  this.currentUser=credentials.username;
                  this.display =true;
                }
             else {
                this.ok=true;
               }
       }

   
msgBox(){
 // this.box=true;
      this.box=true;
}
  
msgBox2(){
  // this.box=true;
  this.msgSendConfirmation=true;
       this.box=false;
 }
 

 }//class close


