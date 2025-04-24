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
        cy.get(this.selectors.searchInput).click()
            .clear()
            .should('be.visible')
            .type(`${keyword}{enter}`)

    }

    validateSearchResults(expectedResults) {
cy.scrollTo("bottom")
        expectedResults.forEach(expected => {
            cy.contains(expected);
        });
    }
}

export default SearchPage;
