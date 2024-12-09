class InventoryPage {
    addItemToCart(itemName) {
        cy.contains('.inventory_item_name', itemName).parents('.inventory_item').find('button').click();
    }

    removeItemFromCart(itemName) {
        cy.contains('.inventory_item_name', itemName).parents('.inventory_item').find('button').click();
    }
}

export const inventoryPage = new InventoryPage();
