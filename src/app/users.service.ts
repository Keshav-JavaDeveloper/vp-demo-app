import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users:string[] =["Ajay", "Bhuvan"];
 // =["Ajay", "Bhuvan", "Chethan","David","Ravi","Suresh"]
}
