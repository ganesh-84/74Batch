//Actual Automation Test Scripts
import { test } from "@playwright/test";
import { general } from "../lib/General";

test("TC001-Login & Logout", async ({ page }) => {
    //--Test Steps
    //let obj =new general(page);
    //general is class name in General folder and page is constructor arragment
    const obj = new general(page); 
    await obj.openApplication();
    await obj.login();
    await obj.logout();
});