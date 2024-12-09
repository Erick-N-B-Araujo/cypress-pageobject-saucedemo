import { loginPage } from '../pages/LoginPage';

describe('Login Tests', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('CT01 - Login com credenciais válidas', () => {
        cy.fixture('users').then((users) => {
            loginPage.fillUsername(users.validUser.username);
            loginPage.fillPassword(users.validUser.password);
            loginPage.submit();
            cy.url().should('include', '/inventory.html');
        });
    });

    it('CT02 - Login com credenciais inválidas', () => {
        cy.fixture('users').then((users) => {
            loginPage.fillUsername(users.invalidUser.username);
            loginPage.fillPassword(users.invalidUser.password);
            loginPage.submit();
            loginPage.verifyErrorMessage('Username and password do not match any user in this service');
        });
    });
});
