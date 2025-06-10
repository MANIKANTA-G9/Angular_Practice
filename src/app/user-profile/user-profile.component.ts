import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone:false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  name='';
  email='';
  dob='';
  count=0;
  onReset(){
    this.name="";
    this.email="";
    this.dob="";
  }

  onSave(){
    console.log(this.name,this.email,this.dob);
    this.count+=1;
  }
  
  get isDataPresent(){
    return this.name||this.email||this.dob;
  }

}
