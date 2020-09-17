

import ElementUtils from '../utitity/ElementUtils';

class xxZohoLoginPage {
    
    

    get inputPassword() { return $("//input[@name='PASSWORD']") }
    get btnSubmit() { return $("(//span[text()='Sign in'])[2]") }

    


  
        setPassword(){
        ElementUtils.isDisplayed( this.inputPassword);
        ElementUtils.doSetValue(this.inputPassword, "54SonsofGod54 " )
        
        }
        login(){
            ElementUtils.doClick(this.btnSubmit);

        }

}

export default new xxZohoLoginPage();
