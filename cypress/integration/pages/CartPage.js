class CartPage {
    openCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export const cartPage = new CartPage();
