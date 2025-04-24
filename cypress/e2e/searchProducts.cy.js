import SearchPage from '../pages/SearchPage';

describe('Search and Validate Results', () => {
    const searchPage = new SearchPage();

    it('should search for products and validate expected results', () => {
        cy.visit('/');

        cy.fixture('searchData').then(data => {
            const { searchKeyword, expectedResults } = data;



            searchPage.searchFor(searchKeyword);
            searchPage.validateSearchResults(expectedResults);

        });
    });
});
