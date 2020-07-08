import { Component } from '@angular/core';
import { CommonService } from '../../../_services/common.service';

@Component({
  selector: 'app-websiteintro',
  templateUrl: './websiteintro.component.html',
  styleUrls: ['./websiteintro.component.css']
})
export class WebsiteintroComponent {
  // Injective Common Service into Constructor to Use Global Variables.
  constructor(public commonService: CommonService) {
  }
}
