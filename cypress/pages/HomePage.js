class HomePage {
    visit() {
        cy.visit('/');
    }

    getSearchBox() {
        return cy.get('#search');
    }

    getSearchButton() {
        return cy.get('button[title="Search"]');
    }
}

export default HomePage;
