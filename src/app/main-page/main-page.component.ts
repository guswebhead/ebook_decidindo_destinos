import { NetlifyFormsService } from './netlify-forms.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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
        //  this.router.navigateByUrl('/success');
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Enviamos uma mensagem no seu email',
          footer: ''
        })
       },
       err => {
        console.log(err)
         this.errorMsg = err;
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro no servidor!',
          footer: ''
        })
       }
     );
    }

}
