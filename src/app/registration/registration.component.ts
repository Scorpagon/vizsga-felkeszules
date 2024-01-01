import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  userAddForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, this.customNameValidator]),
    address: new FormControl('', [Validators.required]),
    counrty: new FormControl('', [Validators.required]),
    subscription: new FormControl(true, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.userAddForm);
  }

  customNameValidator(): ValidationErrors | null {
    return (control: AbstractControl) => {
      const hasSpace = control.value.includes(' ');
      const min3Char = control.value
        .split(' ')
        .every((namePart: string) => namePart.length >= 3);
      console.log(control);
      return hasSpace && min3Char ? null : { custmNameInvalid: true };
    };
  }

  get name() {
    return this.userAddForm.get('name');
  }

  get address() {
    return this.userAddForm.get('address');
  }

  get counrty() {
    return this.userAddForm.get('counrty');
  }

  get subscription() {
    return this.userAddForm.get('subscription');
  }
}
