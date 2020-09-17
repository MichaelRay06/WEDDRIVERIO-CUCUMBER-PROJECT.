import ElementUtils from '../utitity/ElementUtils'; 
class FormPage{

    firstName(){return $("//input[@id='firstName']")} 
    lastName(){return $("//input[@id='lastName']")} 
    emailBox(){return $('#userEmail')}
    phoneBox(){return $('#userNumber')} 
    gender(){return $('#gender-radio-1')}

    
    populateDetails(myirstName, mylastName, myEmail, myphoneNumber){
       // ElementUtils.doDisplayed(this.firstName);
        ElementUtils.doSetValue(this.firstName, myirstName);
        ElementUtils.doSetValue(this.lastName, mylastName);
        ElementUtils.doSetValue(this.emailBox, myEmail);
        ElementUtils.doSetValue(this.phoneBox, myphoneNumber);

    }
    selectGender(){
        ElementUtils.doClick(this.gender);
        browser.pause(10000);

    }




}
export default new FormPage();