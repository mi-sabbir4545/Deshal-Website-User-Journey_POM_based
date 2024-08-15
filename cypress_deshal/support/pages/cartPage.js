class CartPage {
    viewCart() {
      cy.xpath("//a[normalize-space()='View Cart']").click();
    }
  
    updateQuantity(quantity) {
      cy.xpath("//input[@class='quantity-input']").clear().type(quantity);
      cy.xpath("//button[normalize-space()='Update']").click();
    }
  
    proceedToCheckout() {
      cy.xpath("//a[normalize-space()='Checkout']").click();
    }
  }
  
  export default CartPage;
  