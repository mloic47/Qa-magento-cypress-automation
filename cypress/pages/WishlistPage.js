import ProductPage from "./ProductPage";
const productPage = new ProductPage();
class WishlistPage {
    selectors = {
        productTitle: '.product-item-link',
        addToWishlistButton: '[data-action="add-to-wishlist"]',
        wishlistLink: '.wishlist',
        wishlistItems: '.product-item-name a',
        addToCartFromWishlist: 'Add All to Cart',
        cartIcon: '.minicart-wrapper',
        successMessage: '.message-success',
        successMessageText: 'has been added to your Wish List',
    };

    addProductToWishlistByName(productName) {
        cy.get(this.selectors.productTitle).contains(productName).click();
        cy.contains(productPage.selectors.size).click();
        cy.get(productPage.selectors.color).click();

        cy.get(this.selectors.addToWishlistButton).eq(0).click();
        // cy.get(this.selectors.successMessage).should('contain', this.selectors.successMessageText);
    }



    addAllWishlistItemsToCart() {
        cy.contains(this.selectors.addToCartFromWishlist).click();

    }


}

export default WishlistPage;
