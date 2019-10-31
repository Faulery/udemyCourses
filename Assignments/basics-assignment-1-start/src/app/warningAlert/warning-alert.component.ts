import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      p.warning {
        color: red;
        float: right;
      }
    `,
  ],
})
export class WarningAlertComponent {}
