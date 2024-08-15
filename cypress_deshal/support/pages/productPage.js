class ProductPage {
    selectProduct() {
      cy.xpath("//h2[normalize-space()='Oshim']").click();
    }
  
    selectSize(size) {
      cy.xpath(`//input[@value='${size}']`).click();
    }
  
    addToCart() {
      cy.xpath("//button[normalize-space()='Add to Cart']").click();
    }
  }
  
  export default ProductPage;
  