import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doorslider',
  templateUrl: './doorslider.component.html',
  styleUrls: ['./doorslider.component.css']
})
export class DoorsliderComponent {

  // Setting Local Variables

  // Input Variable to set the Tab Content Heading from main page
  @Input('tabHeading')
  TabHeading: string;
}
