import { Given, When, Then } from 'cucumber';
import ZoloLoginPage from '../pageobjects/zoho.login.page';
import ZohoLogMeinPage from '../pageobjects/zoho.LogmeIn.page';
import LoginConfirmPage from '../pageobjects/loginConfirm.page';


Given(/^I am on the zoho web  page$/,()=>{
    //loginPage.open('https://accounts.zoho.com/');

    browser.maximizeWindow();
    browser.url('https://accounts.zoho.com/'),
    browser.pause(1000);
   
   

});

When(/^I click submit button with my user email as ([^\"]*) and user password as ([^\"]*)$/, (userEmail, userPassword)=>{
    ZoloLoginPage.setEmail(userEmail);
    ZohoLogMeinPage.setPassword(userPassword);
    ZohoLogMeinPage.login();
   
    


});

Then(/^I should be able to confirm user ID message as ([^\"]*)$/, (confirmUserID)=>{
    
    browser.pause(10000);
    LoginConfirmPage.clickLoginImage();
    LoginConfirmPage.waitForElement();
    expect(LoginConfirmPage.loginID).toBeExisting();
    expect(LoginConfirmPage.loginID).toHaveTextContaining(confirmUserID);
    LoginConfirmPage.logMeOut();

});

