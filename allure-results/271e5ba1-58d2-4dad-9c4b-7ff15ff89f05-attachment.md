# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC002.spec.ts >> TC002-Add New Employee
- Location: tests\TC002.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://sureshitacademy.in/hrms/login.php
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | //To provide all re-usable functions and methods related to whole application
  2  | 
  3  | import { global } from  "./Global"
  4  | 
  5  | export class general extends global {
  6  | //user -defined methods 
  7  | async openApplication(){
> 8  | await this.page.goto(this.url);
     |                 ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://sureshitacademy.in/hrms/login.php
  9  | console.log("Application opened");
  10 | }  
  11 | async login() {
  12 | await this.page.locator(this.textbox_loginname).fill(this.username);
  13 | await this.page.locator(this.textbox_password).fill(this.password);
  14 | await this.page.locator(this.button_login).click();
  15 | console.log("Login completed");
  16 | }
  17 | async logout() {
  18 | await this.page.locator(this.link_logout).click();
  19 | console.log("Logout completed");
  20 | }
  21 | async addNewEmployee(){
  22 | const frame =this.page.frameLocator(this.empInfo_link);
  23 | await frame.locator(this.Add_button).click();
  24 | await frame.locator(this.EmpFirstName).fill(this.F_Name);
  25 | await frame.locator(this.EmpLastName).fill(this.L_Name);
  26 | /*await frame.locator(this.File_Upload).setInputFiles(this.File_location);
  27 | console.log("File uploaded");*/
  28 | await frame.locator(this.Save).click();
  29 | console.log("Added new employee details are added");
  30 | }
  31 | async waitStatement()
  32 | {
  33 |     await this.page.waitForTimeout(3000); // Wait for 3 seconds
  34 | }
  35 | }
  36 | 
```