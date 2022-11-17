import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'reactive-demo';

  form = new FormGroup(
    {
      username: new FormControl<string> ('', Validators.required),
      email_address: new FormControl<string> ('', Validators.required),
      password: new FormControl<number | string> ('', Validators.required),
      phone_number: new FormControl<string> ('', Validators.required)
    });
 
  get username()
  {
    return this.form.get('username')?.value;
  }

  get email_address()
  {
    return this.form.get('email_address')?.value;
  }

  get password()
  {
    return this.form.get('password')?.value;
  }

  get phone_number()
  {
    return this.form.get('phone_number')?.value;
  }



  submit(e: Event)
  {
    e.preventDefault();
  }
}



