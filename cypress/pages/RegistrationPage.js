class RegistrationPage {
    // === Selectors ===
    selectors = {
        firstName: '#firstname',
        lastName: '#lastname',
        email: '#email_address',
        password: '#password',
        confirmPassword: '#password-confirmation',
        registerButton: 'button[title="Create an Account"]',
    };

    // === Actions ===
    typeFirstName(firstName) {
        cy.get(this.selectors.firstName).clear().type(firstName);
    }

    typeLastName(lastName) {
        cy.get(this.selectors.lastName).clear().type(lastName);
    }

    typeEmail(email) {
        cy.get(this.selectors.email).clear().type(email);
    }

    typePassword(password) {
        cy.get(this.selectors.password).clear().type(password);
    }

    confirmPassword(password) {
        cy.get(this.selectors.confirmPassword).clear().type(password);
    }

    clickRegister() {
        cy.get(this.selectors.registerButton).click();
    }

    register({ firstName, lastName, email, password }) {
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typeEmail(email);
        this.typePassword(password);
        this.confirmPassword(password);
        this.clickRegister();
    }
}

export default RegistrationPage;
