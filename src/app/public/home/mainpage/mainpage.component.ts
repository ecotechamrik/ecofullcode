import { Component, OnInit } from '@angular/core';
import { fnCalljQuery } from 'src/assets/js/custom-script';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {

  /**
   *
   */
  constructor() {

  }

  /*
   Re-Calling jQuery function on Route Navigation
  */
  ngOnInit() {
    // Function to Call Home Page Slider and other jQuery Effects
    fnCalljQuery();
  }
}