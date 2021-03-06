import Page from './page';
import ElementUtils from '../utitity/ElementUtils';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        ElementUtils.doSetValue(this.inputUsername,username );
        ElementUtils.doSetValue(this.inputPassword,password );
        ElementUtils.doClick( this.btnSubmit);
        
       /*  this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();  */
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (path) {
        browser.maximizeWindow();
        return super.open(path);
        
    }
}

export default new LoginPage();
