import { loginPage } from '../pages/LoginPage';
import { inventoryPage } from '../pages/InventoryPage';

describe('Inventory Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            loginPage.visit();
            loginPage.fillUsername(users.validUser.username);
            loginPage.fillPassword(users.validUser.password);
            loginPage.submit();
        });
    });

    it('CT03 - Adicionar um produto ao carrinho', () => {
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    it('CT04 - Remover um produto do carrinho', () => {
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        inventoryPage.removeItemFromCart('Sauce Labs Backpack');
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});
