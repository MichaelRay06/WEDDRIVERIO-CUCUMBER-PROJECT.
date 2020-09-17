import ElementUtils from '../utitity/ElementUtils';
class xxzohoHomePage{
    get elementInvisible() {return $('div.blur_elem blur')}
    get inputEmail() { return $("//input[@name='LOGIN_ID']") }
    get nextButton() {return $("//span[text()='Next']")}


    setEmail() {
   
       
        ElementUtils.isDisplayed(this.inputEmail);
        ElementUtils.doSetValue( this.inputEmail, "mr.raymich50@gmail.com");
        ElementUtils.doClick(this.nextButton);
    }

};
export default new xxzohoHomePage();