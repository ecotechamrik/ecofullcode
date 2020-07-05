import { Component, OnInit } from '@angular/core';

/* Import jQuery Function to Re-load Home Page jQuery Effects on Route Navigation Changes  */
import { fnCalljQuery } from 'src/assets/js/custom-script';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {

  /* Door Sliders' Headings */
  // Interior
  tabHeadingIntPaintGrade: string = "Interior Traditional Paint Grade Doors";
  tabHeadingIntStainGrade: string = "Interior Traditional Stain Grade Doors";
  tabHeadingIntContemp: string = "Interior Contemporary Doors";

  // Exterior
  tabHeadingExtPaintGrade: string = "Exterior Traditional Paint Grade Doors";
  tabHeadingExtStainGrade: string = "Exterior Traditional Stain Grade Doors";
  tabHeadingExtContemp: string = "Exterior Contemporary Doors";
  tabHeadingExtFrench: string = "Exterior French Doors";

  // Others
  tabHeadingHardware: string = "Hardware";
  tabHeadingInstallService: string = "Installation Services";
  tabHeadingFinishing: string = "Finishing";

  /* Constructor */
  constructor() {

  }

  /* Re-Calling jQuery function on Route Navigation */
  ngOnInit() {
    // Function to Call Home Page Slider and other jQuery Effects
    fnCalljQuery();
  }
}