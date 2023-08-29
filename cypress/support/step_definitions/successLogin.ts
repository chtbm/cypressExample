import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { SuccessLoginPage } from "../pages/successLoginPage";

Given("Validamos mensaje de login exitoso", () => {
  let successLoginPage = new SuccessLoginPage();
  successLoginPage.validateTitle();
});
