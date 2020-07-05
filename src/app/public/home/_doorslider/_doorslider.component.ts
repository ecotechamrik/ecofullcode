import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-_doorslider',
  templateUrl: './_doorslider.component.html',
  styleUrls: ['./_doorslider.component.css']
})
export class _DoorsliderComponent implements OnInit {

  @Input('tabHeading')
  TabHeading: string;

  constructor() { }

  ngOnInit(): void {
  }

}
