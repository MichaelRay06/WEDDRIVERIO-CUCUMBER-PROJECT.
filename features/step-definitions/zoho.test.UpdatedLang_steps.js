import { Given, When, Then } from 'cucumber';

import ZohoeditPage from '../pageobjects/zoho.editButton.page';
import ZohoLanguagePage from '../pageobjects/zoho.language.page';
import ZohoLangUpdatePage from '../pageobjects/zoho.langUpdate.page';
import ZoloLoginPage from '../pageobjects/zoho.login.page';
import ZohoLogMeinPage from '../pageobjects/zoho.LogmeIn.page';



Given(/^I am on the zoho web  page$/,()=>{
   
    browser.maximizeWindow();
    browser.url('https://accounts.zoho.com/'),
    browser.pause(1000);
   
   

});

When(/^I click submit button with my user email as ([^\"]*) and user password as ([^\"]*)$/, (userEmail, userPassword)=>{
    ZoloLoginPage.setEmail(userEmail);
    ZohoLogMeinPage.setPassword(userPassword);
    ZohoLogMeinPage.login();
    browser.pause(10000);

});



When(/^I click edit button$/, ()=> {
    ZohoeditPage.clickEditButtn();

});

When(/^I click on select language text box$/, ()=> {
    ZohoLanguagePage.clickSelectLangBox();

});

When(/^I type in my language as ([^\"]*)$/, (editedLanguage)=> {
    ZohoLanguagePage.setLangTextValue(editedLanguage)

});

/* When(/^I selected my spoken language as ([^\"]*)$/, ()=> {
    ZohoLanguagePage.selectedLang(selectedLangText)

}); */

When(/^I save my profile$/, ()=> {
    ZohoLanguagePage.updateEditedLang();

});


Then(/^I could verify that ([^\"]*) was successfuly Edited$/, (mylanguage)=> {
   // expect(ZohoLangUpdatePage.verifyUpdatedLang).toHaveTextContaining(mylanguage);
    const expectedLangValue  = ZohoLangUpdatePage.verifyGetText();
    expect(expectedLangValue).toHaveTextContaining(mylanguage);

});



