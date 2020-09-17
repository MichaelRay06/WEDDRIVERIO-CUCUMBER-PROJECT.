import ElementUtils from '../utitity/ElementUtils';
class ZohoLogMeinPage{
    get inputPassword() { return $("//input[@name='PASSWORD']") }
    get btnSubmit() { return $("button[id='nextbtn']>span") }
    //[onsubmit] > [tabindex]

    


  
        setPassword(userPassword){
           ElementUtils.isDisplayed(this.inputPassword);
            ElementUtils.setTextValue( this.inputPassword, userPassword) ;
            
           
        
        }
        login(){
            this.btnSubmit.click();

        }

}
export default new ZohoLogMeinPage();