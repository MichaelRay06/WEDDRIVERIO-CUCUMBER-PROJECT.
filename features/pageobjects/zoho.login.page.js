import ElementUtils from '../utitity/ElementUtils';
class ZoloLoginPage{

    get inputEmail() { return $("//input[@id='login_id']") }
    get nextButton() {return $("button[id='nextbtn']>span")}


    setEmail(userEmail) {
   
        ElementUtils.isDisplayed(this.inputEmail);
        browser.pause(10000)
        ElementUtils.doSetValue(this.inputEmail , userEmail);
        ElementUtils.doClick(this.nextButton);

    }

};
export default new ZoloLoginPage();