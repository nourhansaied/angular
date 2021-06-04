import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  users:any=[]
  constructor(userData: UserDataService) {
    this.users = userData.users;

   }

  ngOnInit(): void {
  }

}
