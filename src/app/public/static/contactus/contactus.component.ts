import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../../../_services/common.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef

  /* Using Cell No. and Office Phone no. from a Common Service */
  constructor(public commonService: CommonService) {
  }

  // Setting iFrame Src Dynamically - Normally it does not bind the Src with Property
  ngAfterViewInit() {
    this.iframe.nativeElement.setAttribute('src', this.commonService.WebsiteInfo.AddressMap);
   }
}
