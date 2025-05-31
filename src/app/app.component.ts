import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

 profileForm=new FormGroup({
  name:new FormControl(),
  password:new FormControl(),
  email:new FormControl()
 });

 onSubmit(){
  console.log("Submit button clicked , Value is :"+this.profileForm.value);
  
 }

}
