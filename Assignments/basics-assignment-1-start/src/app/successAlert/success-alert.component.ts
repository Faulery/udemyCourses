import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [
    `
      p.success {
        color: green;
        float: left;
      }
    `,
  ]
})
export class SuccessAlertComponent {}
