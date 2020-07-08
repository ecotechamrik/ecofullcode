import { Component } from '@angular/core';
import { CommonService } from '../../_services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // // Setting Local Variables
  CurrentYear = new Date();

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(public commonService: CommonService) { }
}
