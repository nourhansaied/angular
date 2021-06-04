import { Component } from '@angular/core';

// decorators .. meta info 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
  

export class FooterComponent  {

   c = 10
  constructor() { }

  sum() {

  }
}
