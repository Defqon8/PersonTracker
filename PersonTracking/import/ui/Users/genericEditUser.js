import { Template } from 'meteor/templating';
import './genericEditUser.html';
import { pictures } from '../../api/pictures.js';


Template.editUserHolder.helpers({
    getCollection() {
        return pictures
    }
});

pictures.after.update(function(){
    Router.go('admin/pictures')
})