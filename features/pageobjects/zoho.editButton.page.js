import ElementUtils from '../utitity/ElementUtils';

class ZohoeditPage{
    get editButton() {return  $('#editprofile')}



    clickEditButtn(){
        ElementUtils.isClickable(this.editButton);
    }
    



}
export default new ZohoeditPage();