class CartPage {
    // === Selectors ===
    selectors = {
        cartItemsPrices: '.minicart-price', // Cart items prices
        cartTotal: '.price',
        proceedToCheckoutButton: 'Proceed to Checkout', // Proceed to checkout button
    };

    // === Actions ===

    validateSubtotalMatchesItemSum() {
        cy.get(this.selectors.cartItemsPrices).then(($els) => {
            let sum = 0;
            $els.each((index, el) => {
                const priceText = el.innerText.replace('$', '');
                sum += parseFloat(priceText);
            });

            cy.get(this.selectors.cartTotal).invoke('text').then((subtotalText) => {
                const subtotal = parseFloat(subtotalText.replace('$', ''));
                expect(subtotal).to.eq(sum);
            });
        });
    }


    proceedToCheckout() {
        cy.contains(this.selectors.proceedToCheckoutButton).click();
    }
}

export default CartPage;
