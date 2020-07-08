import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-_websiteintro',
  templateUrl: './_websiteintro.component.html',
  styleUrls: ['./_websiteintro.component.css']
})
export class _WebsiteintroComponent implements OnInit {

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(public commonService: CommonService) {
  }

  ngOnInit(): void {
  }

}
