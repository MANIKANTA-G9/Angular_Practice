import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime, map, switchMap, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', 
        [Validators.required, Validators.minLength(3)]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("Form Submitted!", this.loginForm.value);
      const req = this.http.post<any>('http://localhost:3000/auth/login', {
      username: this.loginForm.value.username,
    password: this.loginForm.value.password})
      .subscribe(
    //     {
    // next: (res) => {
    //   console.log('Login successful', res);
    //   // this.loginForm.reset(); // optional
    //   localStorage.setItem('token', res);
    //   // this.router.navigate(['/users']);
    //   this.loginForm.reset();
    //   console.log(res);
    // },
    // error: (err) => {
    //   console.error('Login failed', err);
    // }
  // }
  res => {
      localStorage.setItem('token', res.access_token);
    }, err => {
      alert('Login failed');
    }
);
    }
  }
}

