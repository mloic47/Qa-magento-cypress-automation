class CheckoutPage {
    // === Selectors ===
    selectors = {
        address: '[name="shippingAddress.street.0"]',
        city: '[name="shippingAddress.city"]',
        state: '[name="shippingAddress.region_id"]',
        postalCode: '[name="shippingAddress.postcode"]',
        phone: '[name="shippingAddress.telephone"]',
        paymentMethod: '#payment-method',
        placeOrderButton: '#place-order-button',
        shippingMethod: '.radio',
        next: 'Next',
        validateSuccess:"sucess"
    };

    // === Actions ===
    fillBillingDetails({ phone, address, city, state, postalCode }) {
        cy.get(this.selectors.address).type(address);
        cy.get(this.selectors.city).type(city);
        cy.get(this.selectors.state).type(state);
        cy.get(this.selectors.postalCode).type(postalCode);
        cy.get(this.selectors.phone).type(phone);
    }

    selectPaymentMethod(paymentMethod) {
        cy.get(this.selectors.paymentMethod).select(paymentMethod);
    }
    selectShippingMethod() {
        cy.get(this.selectors.shippingMethod).eq(1).click();
    }
    placeOrder() {
        cy.get(this.selectors.placeOrderButton).click();
    }

    clickNext() {
        cy.contains(this.selectors.next).click();
    }

    validateSuccess() {
        cy.contains(this.selectors.validateSuccess)
    }
}

export default CheckoutPage;
