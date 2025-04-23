class CartPage {
    // === Selectors ===
    selectors = {
        cartItemsPrices: '.minicart-price', // Cart items prices
        cartTotal: '.price',
        proceedToCheckoutButton: '.action.checkout', // Proceed to checkout button
    };

    // === Actions ===
    getItemPrices() {
        const prices = [];
        cy.get(this.selectors.itemPrices).each(($el) => {
            const priceText = $el.text().replace('$', '');
            prices.push(parseFloat(priceText));
        }).then(() => prices);
    }
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
    validateCartTotal(expectedTotal) {
        cy.get(this.selectors.cartTotal).should('contain', expectedTotal);
    }

    proceedToCheckout() {
        cy.get(this.selectors.proceedToCheckoutButton).click();
    }
}

export default CartPage;
