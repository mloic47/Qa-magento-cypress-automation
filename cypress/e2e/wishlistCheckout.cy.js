import WishlistPage from '../pages/WishlistPage';
import CartPage from '../pages/CartPage';
import {ROUTES} from "../constants/routes";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";

describe('Add to Wishlist and Checkout from Wishlist', () => {
    const wishlistPage = new WishlistPage();
    const cartPage = new CartPage();
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();
    before(() => {
        const user = Cypress.env('validUser');


        cy.visit(ROUTES.REGISTER);
        registrationPage.register(user);

        cy.visit(ROUTES.LOGIN);
        loginPage.login(user);

    });


    it('should add products to wishlist and checkout from wishlist', () => {
        cy.fixture('products').then((productData) => {
            const productNames = productData.orderProducts;

            productNames.forEach((name) => {
                cy.visit('/');
                wishlistPage.addProductToWishlistByName(name);
            });

            wishlistPage.addAllWishlistItemsToCart();
            cy.wait(3000);
            productPage.openCart();
            cartPage.proceedToCheckout();
            cy.wait(2000);
            cy.fixture('shippingData').then((shipping) => {
                checkoutPage.fillBillingDetails(shipping.validShipping);
                checkoutPage.selectShippingMethod();
                checkoutPage.clickNext();

                checkoutPage.placeOrder();
                checkoutPage.validateSuccess();
            });
        });

    });
});
