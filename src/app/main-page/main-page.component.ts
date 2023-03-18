import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    fone: new FormControl()
  });


  constructor(){

  }

  ngOnInit() {
    // ...

  }


}
