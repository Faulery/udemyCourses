import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected defaultSubscription = 'advanced';
  protected submitted = false;
  protected user = {
    email: '',
    subscription: '',
    password: '',
  };
  @ViewChild('f', { static: false }) form: NgForm;

  onSubmit() {
    this.submitted = true;
    this.user = {
      email: this.form.value.email,
      subscription: this.form.value.subscription,
      password: this.form.value.password,
    };
    this.form.reset();
  }
}
