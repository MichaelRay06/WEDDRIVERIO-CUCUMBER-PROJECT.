class ZohoLangUpdatePage{

get verifyUpdatedLang() {return ('#select2-localeLn-container')}


verifyGetText(){
    this.verifyUpdatedLang.waitForDisplayed();
    return this.verifyUpdatedLang.getText();
}


}
export default new  ZohoLangUpdatePage();