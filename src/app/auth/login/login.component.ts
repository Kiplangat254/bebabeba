import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from '../..services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  email = new UntypedFormControl();
  password = new UntypedFormControl();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private formBuilder: UntypedFormBuilder, private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService
  ) {     
    this.createForm();
  }
createForm() {
      this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    }
  ngOnInit(): void {
  if (this.tokenStorage.getToken()) 
  }
   onSubmit() {
    const user = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password,
    }

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    this.http.post('http://localhost:8080/authentication/login', user, { headers: headers }).subscribe(
      
      // The response data
      (response) => {
      
        // If the user authenticates successfully, we need to store the JWT returned in localStorage
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
      },

      // If there is an error
      (error) => {
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
        this.router.navigate(['protected']);
      }

    );
}

}
