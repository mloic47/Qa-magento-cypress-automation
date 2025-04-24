class ProductPage {
    // === Selectors ===
    selectors = {
        productTitle: '.product-item-link',  // Assuming we want the title of the product
        addToCartButton: 'Add to Cart',  // Adjust selector as necessary
        cartIcon: '.minicart-wrapper',
        size: "S",
        color: "#option-label-color-93-item-57"
    };

    // === Actions ===
    addProductToCart(productName) {
        cy.get(this.selectors.productTitle).contains(productName).click();
        cy.contains(this.selectors.size).click();
        cy.get(this.selectors.color).click();
        cy.wait(2000)
        cy.contains(this.selectors.addToCartButton).click();

        cy.wait(2000);
    }

    openCart() {
        cy.get(this.selectors.cartIcon).click();
    }
}

export default ProductPage;
