/// <reference types="cypress" />

export class LoginPage {
    readonly emailField = cy.get('input[data-test="email"]');
    readonly passwordField = cy.get('input[data-test="password"]');
    readonly loginButton = cy.get('button[data-test="login-button"]');

    loginAsCustomer(credentials:{email:string, password:string}) {
        this.emailField.type(credentials.email);
        this.passwordField.type(credentials.password);
        this.loginButton.click();

        cy.url().should('include', '/account');
    }
}