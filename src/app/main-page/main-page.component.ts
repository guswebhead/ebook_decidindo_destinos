import { NetlifyFormsService } from './netlify-forms.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    tel: ['', Validators.required],
  });

  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private netlifyForms: NetlifyFormsService,
    private router: Router
  ){

  }

  ngOnInit() {
    // ...

  }

  closeError() {
    this.errorMsg = '';
  }

  onSubmit() {
    console.log(this.form.value)
    this.netlifyForms.submitFeedback({name: 'Gustavo', email: 'email', tel: 'asidaiosd'}).subscribe(
       () => {
         this.form.reset();
         this.router.navigateByUrl('/success');
       },
       err => {
         this.errorMsg = err;
       }
     );
    }

}
