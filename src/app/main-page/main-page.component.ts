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
    this.netlifyForms.submitFeedback(this.form.value).subscribe(
       () => {
         //  this.router.navigateByUrl('/success');
         this.form.reset();
        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'O arquivo foi disponibilizado em uma nova aba!',
          footer: ''
        })
        window.open('https://app-sara-connect.s3.sa-east-1.amazonaws.com/OLHE+PARA+O+ALTO.pdf', '_blank');
      },
      err => {
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
