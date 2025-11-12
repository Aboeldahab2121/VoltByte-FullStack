import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl, AbstractControl } from '@angular/forms'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })


  registerSubmit(){
    console.log(this.registerForm);
  }
}
