import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { WebsiteInfo } from '../../home/models/WebsiteInfo';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
}
