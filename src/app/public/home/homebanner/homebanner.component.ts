import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../_services/common.service';


@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.css']
})
export class HomebannerComponent {

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(public commonService: CommonService) {
  }
}