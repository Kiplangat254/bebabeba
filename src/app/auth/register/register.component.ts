import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
  confirm = new UntypedFormControl();

  constructor(
    private formBuilder: UntypedFormBuilder, private router: Router,private http: HttpClient
  ) { 
    this.createForm();
  }
createForm() {
    this.registerForm = this.formBuilder.group({
      firstname: [' ', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
        ])],
      lastname: [' ', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
        ])],
      idnumber: [' ', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
        ])],
      phonenumber: [' ', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
        ])],
      email: [' ', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        ])],
      password: [' ', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(35),
        ])],
      confirm: [' ', Validators.required]
    })
}

  ngOnInit(): void {

  }
   onSubmit() {

    const user = {
    firstname: this.registerForm.value.firstname,
    lastname: this.registerForm.value.lastname,
    idnumber: this.registerForm.value.idnumber,
    phonenumber: this.registerForm.value.phonenumber,
    email: this.registerForm.value.email,
    password: this.registerForm.value.password,
    confirm: this.registerForm.value.confirm,
    }
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    this.http.post('http://localhost:8080/authentication/register', user, { headers: headers }).subscribe(
      
      // The response data
      (response) => {
        console.log(response);
      },

      // If there is an error
      (error) => {
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
        this.router.navigate(['login']);
      }

    );
  }

}

