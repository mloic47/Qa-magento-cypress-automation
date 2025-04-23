import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import { ROUTES } from '../constants/routes';

describe('Registration Flow with Login Validation', () => {
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();

    it('should register a user and validate login', () => {
            const user = Cypress.env('validUser');

            cy.visit(ROUTES.REGISTER);
            registrationPage.register(user);

            cy.visit(ROUTES.LOGIN);
            loginPage.login(user);

            cy.url().should('include', ROUTES.ACCOUNT_DASHBOARD);
            cy.contains( `${user.firstName} ${user.lastName}`);

    });
});
