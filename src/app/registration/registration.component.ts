import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime, map, switchMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  
registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', 
        [Validators.required, Validators.minLength(3)],
        [this.usernameTakenValidator.bind(this)]
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: [''],
      contactMethod: ['Email', Validators.required]
    }, { validators: [this.passwordsMatchValidator, this.contactMethodValidator] });
  }

  usernameTakenValidator(control: AbstractControl) {
    if (!control.value) return of(null);
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      debounceTime(300),
      map(users => {
        const userExists = users.some(user => user.username.toLowerCase() === control.value.toLowerCase());
        return userExists ? { usernameTaken: true } : null;
      })
    );
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  contactMethodValidator(group: AbstractControl): ValidationErrors | null {
    const contactMethod = group.get('contactMethod')?.value;
    const email = group.get('email')?.value;
    const phone = group.get('phone')?.value;

    if (contactMethod === 'Email' && !email) return { contactRequired: true };
    if (contactMethod === 'Phone' && !phone) return { contactRequired: true };

    return null;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log("Form Submitted!", this.registrationForm.value);
      this.registrationForm.reset();
    }
  }
}

