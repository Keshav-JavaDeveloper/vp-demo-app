import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private uss:UsersService) { }

   registerMsg:boolean=false;
  details= new FormGroup({
    firstname:new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(12)
    
       
    ]),
    lastname:new FormControl(''),
    place:new FormControl('',[
      Validators.required
   ]),
    mailID:new FormControl('')
   
  });
  whenSubmitted(){
    if (this.details) {
      console.log("ERRORRRRRRRRRRRRRRRR");
    }
  ///  console.log(this.details.firstname.value);
    // console.log(this.details[1].value)
    // console.log(this.details[2].value);
//console.log(this.details.value);

console.log(this.details.controls.firstname.value);
   this.uss.users.push(this.details.controls.firstname.value);
   this.registerMsg =true;
  }
  
     


  ngOnInit() {
  }

}
