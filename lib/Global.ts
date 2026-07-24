//To Provide Test Data & objects / elements related to whole application
import {Page} from "@playwright/test";

export class global {
constructor(public page: Page) {

}
//********Test Data ************ */ 
public url      : string = "https://sureshitacademy.in/hrms/login.php"
public username : string = "sureshit";
public password : string = "sureshit";
public F_Name   : string = "Ganesh";
public L_Name   : string = "kumar" ;
public File_location : string ="E://Playwright_image.png"


//******** Objects / Elements ************ */
public textbox_loginname : string = "//input[@name='txtUserName']";
public textbox_password  : string = "//input[@name='txtPassword']";
public button_login      : string = "//input[@name='Submit']";
//public login : string ="//input[@value='Login']"
public link_logout       : string = "//a[text()='Logout']";
//public logout      :  string = "Logout" ;

public empInfo_link  : string  ="//iframe[@id='rightMenu']";
public Add_button : string    ="//input[@value='Add']";
public EmpFirstName  : string  = "//input[@name='txtEmpFirstName']";
public EmpLastName    : string  = "//input[@name='txtEmpLastName']";
public File_Upload : string = "//input[@id='photofile']";
public Save           : string  =  "//input[@class='savebutton']" ;
}