import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  forbiddenName: 'Test';

  ngOnInit() {
    this.signUpForm = new FormGroup({
      projectName: new FormControl(null, this.customValidator.bind(this)),
      email: new FormControl(null, [Validators.email, Validators.required]),
      projectState: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  customValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (control.value === this.forbiddenName || control.value.trim() === '') {
        resolve({ nameIsForbidden: true });
      } else {
        resolve(null);
      }
    });
    return promise;
  }
}
