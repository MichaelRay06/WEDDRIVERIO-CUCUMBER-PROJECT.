
import { Given, When, Then } from 'cucumber';
import HomeElementPage from '../pageObjectModel/HomeElementPage';
import FormPage from '../pageObjectModel/FormPage';

Given(/^I am on tools.qa.com demo site$/, ()=>{
    
    browser.maximizeWindow();
    browser.url('https://demoqa.com/elements')
    browser.pause(10000); 

});
When(/^I click on form and click practise form$/, ()=>{
    HomeElementPage.clickFormMenu();
    HomeElementPage.clickFormPractiseLink();


});
When(/^I enter ([^\"]*) and ([^\"]*) and  ([^\"]*) and ([^\"]*)$/, (myirstName, mylastName ,myEmail, myphoneNumber )=>{
    FormPage.populateDetails(myirstName, mylastName, myEmail, myphoneNumber)  

});
When(/^I select my gender$/, ()=>{
    FormPage.selectGender();
    
   
});