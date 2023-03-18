import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email] ),
    fone: new FormControl('', [Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])
  });


  constructor(){

  }

  ngOnInit() {
    // ...

  }

  downloadEbook(){
    console.log(this.form.value)
  }


}
