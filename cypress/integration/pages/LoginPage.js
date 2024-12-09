class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    fillUsername(username) {
        cy.get('#user-name').type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('#login-button').click();
    }

    verifyErrorMessage(message) {
        cy.get('[data-test="error"]').should('contain.text', message);
    }
}

export const loginPage = new LoginPage();
