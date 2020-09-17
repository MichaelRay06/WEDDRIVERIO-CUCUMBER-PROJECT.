import ElementUtils from '../utitity/ElementUtils';
class LoginConfirmPage{

    get loginImage() { return $('.top_bar_pic') }
    get loginID() { return $('.pp_expand_email') }
    get logOut(){return $('.pp_expand_signout')}
  
    
    clickLoginImage() {
        ElementUtils.isDisplayed(this.loginImage);
        ElementUtils.doClick(this.loginImage);
    }
        
   waitForElement(){
    ElementUtils.isDisplayed(this.loginID);

       
   }
   logMeOut(){
    ElementUtils.isDisplayed(this.logOut);
    ElementUtils.doClick(this.logOut);

   }
   

        
    }



export default new LoginConfirmPage();