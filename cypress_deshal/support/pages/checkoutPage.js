class CheckoutPage {
    enterPhoneNumber(phone) {
      cy.xpath("//input[@name='phone']").type(phone);
    }
  
    submitPhoneNumber() {
      cy.xpath("//button[normalize-space()='Sign in/sign up']").click();
    }
  
    enterOtp(otp) {
      cy.xpath("//input[@name='otp']").type(otp);
    }
  
    submitOtp() {
      cy.xpath("//button[normalize-space()='Submit OTP']").click();
    }
  }
  
  export default CheckoutPage;
  