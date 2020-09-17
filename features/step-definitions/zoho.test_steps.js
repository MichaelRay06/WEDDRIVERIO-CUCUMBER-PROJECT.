import { Given, When, Then } from 'cucumber';
import xxZoloLoginPage from '../pageobjects/xxZohoLoginPage';
import xxZohoHomePage from '../pageobjects/xxzohoHomePage';
import xxLoginConfirmPage from '../pageobjects/xxZohoConfirmLogInPage';
//import loginPage from '../pageobjects/login.page';


Given(/^I am on the login page$/, () => {
    browser.maximizeWindow();
    browser.url('https://accounts.zoho.com/');
    browser.pause(10000);

});

When(/^I click submit button with my user email as username and user password as password$/, () =>{
    xxZohoHomePage.setEmail();
    xxZoloLoginPage.setPassword();
    xxZoloLoginPage.login()
    


});

Then(/^I should see a flash message$/, () => {
    xxLoginConfirmPage.clickLoginImage();
expect(xxLoginConfirmPage.loginID).toHaveTextContaining('mr.raymich50@gmail.com');
  

});
