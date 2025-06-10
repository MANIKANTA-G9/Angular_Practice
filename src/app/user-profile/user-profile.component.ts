import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone:false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  userProfile=new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
    dob:new FormControl("")
  })

  get name(){return this.userProfile.value.name}
  get email(){return this.userProfile.value.email}
  get dob(){return this.userProfile.value.dob}


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
