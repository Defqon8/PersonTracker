import { Template } from 'meteor/templating';
import './genericEditUser.html';
import { pictures } from '../../api/pictures.js';


Template.editUserHolder.helpers({
    getCollection() {
        return pictures
    }
});