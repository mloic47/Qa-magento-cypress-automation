class LoginPage {
    selectors = {
        email: '#email',
        password: '#pass',
        loginButton: '#send2',
    };

    typeEmail(email) {
        cy.get(this.selectors.email).clear().type(email);
    }

    typePassword(password) {
        cy.get(this.selectors.password).clear().type(password);
    }

    clickLogin() {
        cy.get(this.selectors.loginButton).click();
    }

    login({ email, password }) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLogin();
    }
}

export default LoginPage;
