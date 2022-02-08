import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistrationForm: FormGroup;
  submitted: boolean = false;

  constructor( private formBuilder: FormBuilder, private customValidator: ValidationService) { }

  ngOnInit(): void {
    this.userRegistrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]]
    });
  };

  get registrationFormControl() {
    return this.userRegistrationForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.userRegistrationForm.valid) {
      alert('Form is valid and can be submitted!');
      console.table(this.userRegistrationForm.value);
    }
  }

}
