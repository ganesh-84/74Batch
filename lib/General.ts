//To provide all re-usable functions and methods related to whole application

import { global } from  "./Global"

export class general extends global {
//user -defined methods 
async openApplication(){
await this.page.goto(this.url);
console.log("Application opened");
}  
async login() {
await this.page.locator(this.textbox_loginname).fill(this.username);
await this.page.locator(this.textbox_password).fill(this.password);
await this.page.locator(this.button_login).click();
console.log("Login completed");
}
async logout() {
await this.page.locator(this.link_logout).click();
console.log("Logout completed");
}
async addNewEmployee(){
const frame =this.page.frameLocator(this.empInfo_link);
await frame.locator(this.Add_button).click();
await frame.locator(this.EmpFirstName).fill(this.F_Name);
await frame.locator(this.EmpLastName).fill(this.L_Name);
await frame.locator(this.File_Upload).setInputFiles(this.File_location);
console.log("File uploaded");
await frame.locator(this.Save).click();
console.log("Added new employee details are added");
}
async waitStatement()
{
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
}
}
