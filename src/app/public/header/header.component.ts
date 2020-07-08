import { Component } from '@angular/core';
import { CommonService } from '../../_services/common.service';
import { WEBSITES } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Setting Local Variables
  CurrentDate = new Date();

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(public commonService: CommonService) {
    
  }
}
