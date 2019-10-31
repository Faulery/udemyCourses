import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';
  disabled = true;

  toggleButtonActive(event: any) {
    this.disabled =
      (event.target as HTMLInputElement).value.trim() === '' ? true : false;
  }

  resetUsername() {
    this.username = '';
  }
}
