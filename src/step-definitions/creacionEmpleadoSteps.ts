import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import PimPage from "../pages/pimPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const pimPage = new PimPage();

Given('que se ingresa a la página de OrangeHRM con mis credenciales username {string} y password {string}', async (user, password)=> {
    await loginPage.navigateToOrangePage();
    await loginPage.login(user, password);
    await loginPage.click_button_login();
    await dashboardPage.loginSuccess();
})

When('creo un nuevo empleado con nombre {string}, segundo nombre {string} y apellido {string}', async (firstName, middleName, lastName)=> {
    await pimPage.create_employee(firstName, middleName, lastName);
})

Then('el empleado es creado satisfactoriamente', async ()=> {
    await pimPage.click_button_add_employee();
    await pimPage.detail_employee();
})