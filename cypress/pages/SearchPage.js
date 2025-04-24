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
            .type(`${keyword}{enter}`);
    }

    validateSearchResults(expectedResults) {
        cy.get(this.selectors.searchResults)
            .should('exist')
            .then(($links) => {
                const texts = [...$links].map(el => el.innerText.toLowerCase());
                expectedResults.forEach(expected => {
                    expect(
                        texts.some(text => text.includes(expected.toLowerCase())),
                        `Expected to find result containing "${expected}"`
                    ).to.be.true;
                });
            });
    }

}

export default SearchPage;
