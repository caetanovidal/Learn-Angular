import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupForm: NgForm;
  defaultQuestion = 'pet';
  answer: string = "";
  genders = ['male', 'female'];
  submitted = false;
  username='';
  email='';
  secretQuestion='';
  gender='' ;
 
  constructor(){
    this.signupForm = ViewChild('f');
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm?.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  // onSubmit(){
  //   console.log(this.signupForm)
  // }

  onSubmit(){
    this.submitted = true;
    this.username = this.signupForm?.value.userData.username;
    this.email = this.signupForm?.value.userData.email;
    this.secretQuestion = this.signupForm?.value.secret;
    this.answer = this.signupForm?.value.questionAnswer;
    this.gender = this.signupForm?.value.gender;
    
    this.signupForm?.reset();
  }
}
