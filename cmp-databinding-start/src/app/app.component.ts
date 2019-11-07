import { Component } from '@angular/core';

export interface Element {
  type: string;
  name: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: Element[] = [
    {type: 'server', name: 'Test server', content: 'Just a test'}
  ];
}
