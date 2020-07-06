import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-_footer',
  templateUrl: './_footer.component.html',
  styleUrls: ['./_footer.component.css']
})
export class _FooterComponent implements OnInit {

  // Setting Local Variables
  CurrentYear = new Date();
  CurrentWebsite: string;
  constructor(private commonService: CommonService) { }

  // Settin Variables Values from the Common Service
  ngOnInit(): void {
    this.CurrentWebsite = this.commonService.CurrentWebsite;
  }

}
