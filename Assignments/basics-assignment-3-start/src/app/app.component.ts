import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  isShown = false;
  buttonsLog = [];
  clickNumbers = 0;

  toggleContent() {
    this.isShown = !this.isShown;
    this.buttonsLog.push({ id: this.clickNumbers++ });
  }

  getBackground = () => (this.buttonsLog.length > 4 ? 'blue' : 'transparent');
}
