import { LoginPage } from "../pages/LoginPage";

const loginPage = new LoginPage();

describe('my first test', () => {
    it('able to login successfully', () => {
      cy.visit('https://practicesoftwaretesting.com/');
      cy.contains('Sign in').click();
      cy.url().should('include', '/auth/login');

      loginPage.loginAsCustomer({email:'customer@practicesoftwaretesting.com', password:'welcome01'});
    })
  });