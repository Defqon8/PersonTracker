import { Template } from 'meteor/templating';
import './genericUserList.html'
import './genericEditUser.html'
import { pictures } from '../../api/pictures.js' ;

Template.genericUserList.helpers({
    getUsers: function() {
        return pictures.find({});
    }
});

Template.genericUserList.events({ 
    'click .adduser': function() { 
        Router.go('/admin/user/add')
    },

    'click .edituser': function(){
        // console.log(this.username);
        Router.go('edit.user', {name: this.username})
    }

});