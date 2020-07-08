// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Cell:"604.677.1144",
  OfficePhone:"1.888.238.2687",
  Fax: "604.677.1146",
  ContactEmail: "info@doorex.com",
  WebsiteName: "Door Seattle",
  DevelopedBy: "Department of MIS, Eco Tech Doors",
  CompanyName: "Eco Tech Doors",
  WEBAPIURL: 'http://localhost:58326/api/'
};

/* Setting Different Websites Values depending on the Website Domain to load content of the selected website */
export enum WEBSITES{
  DoorSeattle = 1,
  DoorsSeattle = 2,
  EcoTechDoor = 3,
  DoorsBC = 4
}