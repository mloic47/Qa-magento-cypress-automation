import ProductPage from "./ProductPage";
const productPage = new ProductPage();
class SearchPage {
    selectors = {
        searchInput: '#search',
        searchButton: 'button.action.search',
        resultItems: '.product-item-link'
    };

    searchFor(keyword) {
        cy.wait(1000)
        cy.get(this.selectors.searchInput).clear()
        cy.get(this.selectors.searchInput).click()
        cy.get(this.selectors.searchInput).should('be.visible').type(`${keyword}{enter}`)

    }

    validateSearchResults(expectedResults) {
        cy.get(productPage.selectors.productTitle).should('exist');

        expectedResults.forEach(expected => {
            cy.get(productPage.selectors.productTitle).should('contain.text', expected);
        });
    }
}

export default SearchPage;
