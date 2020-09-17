import ElementUtils from '../utitity/ElementUtils';

class ZohoLanguagePage{

    get selectLangBox() {return $('#select2-localeLn-container')}
    get typeLangValue() {return  $('input.select2-search__field')}
    get selectLangType() {return $$('ul.select2-results__options>li')}
    get saveProfile() {return $('#saveprofile')}


clickSelectLangBox(){
ElementUtils.isClickable(this.selectLangBox);
}

setLangTextValue(textValue){
    ElementUtils.setTextValue(this.typeLangValue, textValue);
    ElementUtils.doSetValue(this.typeLangValue, "ArrowDown");
    ElementUtils.doSetValue(this.typeLangValue, "Enter");
}

//selectedLang(selectedLangText){
    //ElementUtils.setTextValue(this.selectLangType, selectedLangText);

  /*       let menusElement= $$('ul.select2-results__options>li');
        menusElement.waitForDesplayed();

         menusElement.then( function(selectMenu){
            for (let i=0; i<selectMenu.length; i++){
                 selectMenu[i].getText().then( function(myMenu){
                   if(myMenu==selectedLangText){
                     selectMenu[i].click();
       
     
    }
})
}
}) */
  /*  for (var i=0; i<menusElement.lenght(); i++){
            console.log(menusElement[i].getText())
           if( menusElement[i].getText()==selectedLangText){
            menusElement[i].click();
            break;

           }
        } */
       

//}
    


    
updateEditedLang(){
    ElementUtils.isEnable(this.saveProfile)
    ElementUtils.isClickable(this.saveProfile)

}
        

        
}


export default new ZohoLanguagePage();