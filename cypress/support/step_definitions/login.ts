import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage";

Given("Vamos al sitio login", () => {
  cy.visit("/");
});

Then("Realizamos login en el sitio", () => {
  let loginPage = new LoginPage();
  loginPage.login();
});
