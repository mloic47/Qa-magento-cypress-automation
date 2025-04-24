import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import { ROUTES } from '../constants/routes';

describe('Place Order with Multiple Products', () => {

    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('should add multiple products to the cart and validate price', () => {
        cy.fixture('products').then((productData) => {
            const productNames = productData.orderProducts;

            // Add products to the cart
            productNames.forEach((product) => {
                cy.visit('/'); // Navigate to homepage
                productPage.addProductToCart(product);
            });

            // Open the cart and validate total price
            productPage.openCart();
            cartPage.validateSubtotalMatchesItemSum();
            });
        });

});
