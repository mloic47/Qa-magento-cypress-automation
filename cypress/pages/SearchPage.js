import ProductPage from "./ProductPage";
const productPage = new ProductPage();
class SearchPage {
    selectors = {
        searchInput: '#search',
        searchButton: 'button.action.search',
        resultItems: '.product-item-link'
    };

    searchFor(keyword) {
        cy.get(this.selectors.searchInput)
            .should('exist')
            .should('not.be.disabled')
            .clear()
            .type(`${keyword}{enter}`,{delay:1000});
    }

    validateSearchResults(expectedResults) {
        cy.get(this.selectors.searchResults).should('exist');

        expectedResults.forEach(expected => {
            cy.get(productPage.productTitle).should('contain.text', expected);
        });
    }
}

export default SearchPage;
