import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent {

  loginForm: FormGroup;
  showPassword = false;
  
  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
  }

}
