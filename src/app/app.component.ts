import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

 profileForm=new FormGroup({
  name:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.minLength(5),Validators.required]),
  email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
 });

 onSubmit(){
  console.log("Submit button clicked , Value is :"+this.profileForm.value);
  
 }
 get name(){
  return this.profileForm.get('name');
 }
 get email(){
  return this.profileForm.get('email');
 }
 get password(){
  return this.profileForm.get('password');
 }


}
