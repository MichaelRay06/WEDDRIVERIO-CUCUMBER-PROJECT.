import { Given, When, Then } from 'cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';


   Given(/^I am on the login page$/,() => {
    browser.maximizeWindow();
   // LoginPage.open('https://the-internet.herokuapp.com/login');
   browser.url('https://the-internet.herokuapp.com/login'),
   browser.pause(1000);
});

When(/^I login with ([^\"]*) and ([^\"]*)$/, (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see a flash message saying ([^\"]*)$/, (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

