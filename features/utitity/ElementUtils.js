class ElementUtils {


    static getTitle(){
      return browser.getTitle();
     

    }
    doGetText(element){
        element.waitForDisplayed();
        browser.pause(10000);
        return element.getText();

    }
    doSetValue(element, textValue){
        element.waitForDisplayed();
        element.setValue(textValue);
        browser.pause(10000);
    }
    doClick(element){
        element.waitForDisplayed();
        element.click();
        browser.pause(10000);
    }
    doDisplayed(element){
        element.waitForDisplayed();
        browser.pause(10000);
       return element.isDisplayed();
      

///////////////////////////////////////////////////////////////////////////////
}
untilNoneDisplayed(element){
    element.waitForDisplayed({ timeout:10000, reverse:true, timeoutMsg:'element not displayed', interval:500 });
    element.isDisplayed(); 
      

}
    isDisplayed(element){
        element.waitForDisplayed({ timeout:10000,  timeoutMsg:'element not displayed'+ displayedElement, interval:500 });
      return element.isDisplayed();

    }
    isClickable(element){
        element.waitForClickable({timeout:100000,  timeoutMsg:'element not clickable'+clickElement, interval:500});
        element.click();
       

    }
    isEnable(element){
      return element.waitForEnabled({timeout:100000, reverse:false, timeoutMsg:'element not clickable', interval:500});
    
      
     
    }
    setTextValue(element, textValue){
       // element.waitForDisplayed({ timeout:10000, reverse:false, timeoutMsg:'element not displayed', interval:500 });
       // element.isDisplayed();
        element.setValue(textValue);
      
    
}
//////////////////////////////////////////////////////////////

waitDiaplayed(element){
    element.waitUntil(function () {
       return this.isDisplayed() === true
   }, {
       timeout: 10000,
       timeoutMsg: 'element is not diaplayed after 5s',
       interval:500
   });
   
}
waitSetValue(element, Textvalue){
    element.waitUntil(function () {
        this.setValue(Textvalue) === Textvalue;
   }, {
       timeout: 10000,
       timeoutMsg: 'expected text to be different after 5s',
       interval:500
   });

}
waitGetTitle(){
    browser.waitUntil(function (textTitle) {
      return  browser.getTitle() === textTitle;
   }, {
       timeout: 10000,
       timeoutMsg: 'expected text to be different after 5s',
       interval:500
   });

}
waitGetText(element, textValue){
    element.waitUntil(function () {
      return  this.getText() === textValue;
   }, {
       timeout: 10000,
       timeoutMsg: 'expected text to be different after 5s',
       interval:500
   });
}
waitClick(element){
    element.waitUntil(function () {
     this.click() === true
   }, {
       timeout: 10000,
       timeoutMsg: 'expected text to be different after 5s',
       interval:500
   });

}
waitEanable(element){
    element.waitUntil(function () {
       return this.isEnabled() === true
   }, {
       timeout: 10000,
       timeoutMsg: 'expected text to be different after 5s',
       interval:500
   });

}
waitExist(element){
    element.waitUntil(function () {
       return this.isExisting() === true
   }, {
       timeout: 10000,
       timeoutMsg: 'expected text to be different after 5s',
       interval:500
   
    });

    ////////////////////////////////////////////////////////////////////

   browser.addCommand('getURLandTitle', function(){
       return{
           url:this.getUrl(),
           title:this.getTitle(),
       }
   })


   browser.addCommand('waitAndClick', function(selector){
try{
    $(selector).waitForExist()
    $(selector).click()
}catch(error){
    throw new Error('could not click on selector: ${selector}')
}
   })

   browser.addCommand('waitAndsetValue', function(selector, setTextValue){
    try{
        $(selector).waitForExist()
        $(selector).setValue(setTextValue)
    }catch(error){
        throw new Error('could not click on selector: ${selector}')
    }
       })

       browser.addCommand('waitAndgetText', function(selector){
        try{
            $(selector).waitForExist()
         return $(selector).getText()
        }catch(error){
            throw new Error('could not click on selector: ${selector}')
        }
           })
    

   





}

}
export default new ElementUtils();