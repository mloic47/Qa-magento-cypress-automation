class CheckoutPage {
    // === Selectors ===
    selectors = {
        firstName: '#firstname',
        lastName: '#lastname',
        address: '#address',
        city: '#city',
        state: '#state',
        postalCode: '#zipcode',
        paymentMethod: '#payment-method',
        placeOrderButton: '#place-order-button',
    };

    // === Actions ===
    fillBillingDetails({ firstName, lastName, address, city, state, postalCode }) {
        cy.get(this.selectors.firstName).type(firstName);
        cy.get(this.selectors.lastName).type(lastName);
        cy.get(this.selectors.address).type(address);
        cy.get(this.selectors.city).type(city);
        cy.get(this.selectors.state).type(state);
        cy.get(this.selectors.postalCode).type(postalCode);
    }

    selectPaymentMethod(paymentMethod) {
        cy.get(this.selectors.paymentMethod).select(paymentMethod);
    }

    placeOrder() {
        cy.get(this.selectors.placeOrderButton).click();
    }
}

export default CheckoutPage;
