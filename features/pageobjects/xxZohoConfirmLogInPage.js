import ElementUtils from '../utitity/ElementUtils';
class xxZohoConfirmLogInPage{
    get loginImage() { return $("//img[@id='headder_thumb_pic']") }
    get loginID() { return $("//div[@id='logoutid']") }
  
    
    clickLoginImage() {
        ElementUtils.doClick(this.loginImage)
    }
}
export default new xxZohoConfirmLogInPage();