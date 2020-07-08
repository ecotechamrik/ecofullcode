// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  WEBAPIURL: 'http://localhost:58326/api/',

  // CurrentWebsite - Pass Enum Text from Below WEBSITES Enum
  // CurrentWebsiteID - Pass Enum ID from Below WEBSITES Enum
  // Load DoorBC Website
  /*
  CurrentWebsite: "DoorsBC",
  CurrentWebsiteID: 4
  */

  // Load Doors Seattle Website
  CurrentWebsite: "DoorSeattle",
  CurrentWebsiteID: 1
};

/* Setting Different Websites Values depending on the Website Domain to load content of the selected website */
export enum WEBSITES{
  DoorSeattle = 1,
  DoorsSeattle = 2,
  EcoTechDoor = 3,
  DoorsBC = 4
}