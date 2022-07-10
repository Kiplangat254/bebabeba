import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  firstname = new UntypedFormControl();
  lastname = new UntypedFormControl();
  idnumber = new UntypedFormControl();
  phonenumber = new UntypedFormControl();
  email = new UntypedFormControl();
  password = new UntypedFormControl();



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private formBuilder: UntypedFormBuilder, private http: HttpClient, private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstame: [' D', Validators.required],
      lastame: ['D ', Validators.required],
      idnumber: ['S ', Validators.required],
      phonenumber: [' A', Validators.required],
      email: ['C ', Validators.required],
      password: ['Z ', Validators.required],
    });


  }
   onSubmit() {

    console.log('firstame', this.registerForm.value.firstame); 
    console.log('lastame', this.registerForm.value.lastame); 
    console.log('idnumber', this.registerForm.value.idnumber); 
    console.log('phonenumber', this.registerForm.value.phonenumber);
    console.log('email', this.registerForm.value.email);
    console.log('password', this.registerForm.value.password); 

}
}

