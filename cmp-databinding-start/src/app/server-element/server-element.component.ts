import { Component, Input, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit, ContentChild } from '@angular/core';
import { Element } from '../app.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // ShadowDOM, Emulated
})
export class ServerElementComponent implements AfterViewInit {
  @Input() element: Element;
  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentParagraph', {static: false}) contentParagraph: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.heading.nativeElement.textContent);
    console.log(this.contentParagraph.nativeElement);
  }

}
