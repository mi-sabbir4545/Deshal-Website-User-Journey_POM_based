class HomePage {
    visit() {
      cy.visit('https://www.deshal.net');
    }
  
    hoverOverWomenModule() {
      cy.xpath("//a[@class='relative text-sm font-normal group-hover:font-bold lg:text-base'][normalize-space()='Women']").trigger('mouseover');
    }
  
    selectCategory() {
      cy.xpath("//a[@title='Salwar Kamiz']").click();
    }
  }
  
  export default HomePage;
  