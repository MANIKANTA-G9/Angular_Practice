import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone:false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  userProfile=new FormGroup({
    name:new FormControl("", Validators.required),
    email:new FormControl("", Validators.required),
    dob:new FormControl("")
  })

  get name(){return this.userProfile.value.name}
  get email(){return this.userProfile.value.email}
  get dob(){return this.userProfile.value.dob}

  get nameErr(): string | null {
    const nameControl = this.userProfile.get('name');
    if (nameControl?.hasError('required')) {
      return 'Name is required';
    }
    return null;
  }
  get emailErr(): string | null {
    const nameControl = this.userProfile.get('email');
    if (nameControl?.hasError('required')) {
      return 'Email is required';
    }
    return null;
  }

  // name='';
  // email='';
  // dob='';
  count=0;
  onReset(){
    this.userProfile.reset();
    // this.name="";
    // this.email="";
    // this.dob="";
  }

  onSave(){
    console.log(this.name,this.email,this.dob);
    this.count+=1;
  }
  
  get isDataPresent(){
    const formValue=this.userProfile.value;
    return formValue.name||formValue.email||formValue.dob;
  }

}
