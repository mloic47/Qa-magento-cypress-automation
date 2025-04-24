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
            .type(`${keyword}{enter}`)
    }

    validateSearchResults(search) {
        cy.get(productPage.selectors.productTitle).should('exist');
        cy.get(productPage.selectors.productTitle).contains('search');
    }
}

export default SearchPage;
