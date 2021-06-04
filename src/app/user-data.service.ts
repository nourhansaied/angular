import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  users: User[] = [
    { name: "Nouhan", age: 23, salery: 20000, gender: 'female', dateOfBirth: "02/02/2000", friends: ["ajskdh", "askjhd", "ashdg"] },
    { name: "ahmed", age: 30, salery: 28000, gender: 'male', dateOfBirth: "02/03/2000" },
    { name: "mohamed", age: 20, salery: 24000, gender: 'male',dateOfBirth: "02/04/2000" },
    { name: "aya", age: 33, salery: 30000, gender: 'female', dateOfBirth: "02/06/2000" },
  ]
  constructor() { }

  setData() {
    
  }
  sayHi(name) {
    console.log("akshdkajshd" + name);
    
  }
}
