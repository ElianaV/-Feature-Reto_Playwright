import { expect } from "@playwright/test";

export default class PimPage{
    private Elements = {
        pimBtn: "//body/div[@id='app']/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[2]",
        addBtn: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]",
        searchBtn: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/button[2]",
        employeeNameInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]",
        recordsLabel: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/span[1]",
        firstNameInput: "//input[@name='firstName']",
        middleNameInput: "//input[@name='middleName']",
        lastNameInput: "//input[@name='lastName']",
        saveBtn: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[2]/button[2]",
        confirmPopUp: "//body/div[@id='app']/div[@id='oxd-toaster_1']/div[1]/div[1]/div[2]",
        otherIdInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
        driverLicenseInput: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[2]/input[1]",
        genderBtn: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/label[1]/span[1]",
        saveBtn2: "//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[4]/button[1]"
    }

    async create_employee(firstName: string, middleName: string, lastName: string) {
        await global.page.waitForSelector(this.Elements.pimBtn);
        await global.page.click(this.Elements.pimBtn);
        await global.page.waitForSelector(this.Elements.addBtn);
        await global.page.click(this.Elements.addBtn);
        await global.page.waitForSelector(this.Elements.saveBtn);
        await global.page.type(this.Elements.firstNameInput, firstName);
        await global.page.type(this.Elements.middleNameInput, middleName);
        await global.page.type(this.Elements.lastNameInput, lastName);
    }

    async click_button_add_employee() {
        await global.page.click(this.Elements.saveBtn);
        await global.page.waitForSelector(this.Elements.confirmPopUp);
        await expect(global.page.locator(this.Elements.confirmPopUp)).toBeVisible(); 
    }

    async detail_employee() {
        await global.page.waitForSelector(this.Elements.saveBtn2);
        await global.page.type(this.Elements.otherIdInput, "0244");
        await global.page.type(this.Elements.driverLicenseInput, "NO");
        await global.page.click(this.Elements.genderBtn);
    }

    async view_employee(employeetName : String) {
        await global.page.waitForSelector(this.Elements.pimBtn);
        await global.page.click(this.Elements.pimBtn);
        await global.page.waitForSelector(this.Elements.searchBtn);
        await global.page.type(this.Elements.employeeNameInput, employeetName);
    }

    async click_button_search_employee() {
        await global.page.click(this.Elements.searchBtn);
        await global.page.waitForSelector(this.Elements.recordsLabel);
        await expect(global.page.locator(this.Elements.recordsLabel)).toBeVisible(); 
    }

}