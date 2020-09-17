
import ElementUtils from '../utitity/ElementUtils';
class HomeElementPage{
   
   
    get formLink() {return $("(//div[@class='header-text'])[2]") } 
    get practiseForm() {return $("//span[text()='Practice Form']")} 



    clickFormMenu(){
        
 ElementUtils.doClick(this.formLink);
 //browser.pause(10000);
 

       
    }
    
    
    clickFormPractiseLink(){
       // ElementUtils.doDisplayed(this.practiseForm);
        ElementUtils.doClick(this.practiseForm);
        //browser.pause(10000);
       
    }
   




}
export default new HomeElementPage();
