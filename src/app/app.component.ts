import { Component } from '@angular/core';
import { WEBSITES, environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // CurrentWebsite = WEBSITES[WEBSITES.DoorSeattle]; -- REQUIRED LATER
  Cell = environment.Cell;
  OfficePhone = environment.OfficePhone;
  CurrentDate = new Date();
}
