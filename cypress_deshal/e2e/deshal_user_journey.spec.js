import HomePage from '../support/pages/homePage';
import ProductPage from '../support/pages/productPage';
import CartPage from '../support/pages/cartPage';
import CheckoutPage from '../support/pages/checkoutPage';

describe('Deshal Website User Journey', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('should automate the user journey on Deshal', () => {
    // Step 1: Navigate to the Website
    homePage.visit();

    // Step 2: Hover over the Women module
    homePage.hoverOverWomenModule();

    // Optional: Assert the page title if needed
    cy.title().should('eq', 'Deshal | Ecommerce | salwar-kameez');

    // Step 3: Select a Product Category
    homePage.selectCategory();

    // Step 4: Select a Product
    productPage.selectProduct();

    // Step 5: Select Size and Add to Cart
    productPage.selectSize('38');
    productPage.addToCart();

    // Step 6: View Cart
    cartPage.viewCart();

    // Step 7: Update Quantity
    cartPage.updateQuantity('2');

    // Step 8: Proceed to Checkout
    cartPage.proceedToCheckout();

    // Step 9: Sign Up Using Phone Number
    checkoutPage.enterPhoneNumber('01684977477');
    checkoutPage.submitPhoneNumber();
    checkoutPage.enterOtp('500731');
    checkoutPage.submitOtp();
  });
});
