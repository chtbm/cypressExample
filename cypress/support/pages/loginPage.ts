export class LoginPage {
  private readonly usernameInput: string = "#username";
  private readonly passwordInput: string = "#password";
  private readonly submitButton: string = "#submit";

  login() {
    cy.get(this.usernameInput).type(Cypress.env("user").username);
    cy.get(this.passwordInput).type(Cypress.env("user").password);
    cy.get(this.submitButton).click();
  }
}
