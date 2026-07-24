//Actual Automation Test Scripts
import { test } from "@playwright/test";
import { general } from "../lib/General";

test("TC002-Add New Employee", async ({page}) => {
    //--Test Steps
    const obj= new general(page);
    await obj.openApplication();
    await obj.waitStatement();
    await obj.login();
    await obj.waitStatement();
    await obj.addNewEmployee();
    await obj.waitStatement();
    await obj.logout();
});
