export class SuccessLoginPage {
  private readonly titleLabel: string = ".post-title";

  validateTitle() {
    cy.get(this.titleLabel).should("have.text", "Logged In Successfully");
  }
}
