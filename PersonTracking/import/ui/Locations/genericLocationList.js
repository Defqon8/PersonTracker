import { Template } from 'meteor/templating';
import './genericLocationsList.html'
import { locations } from '../../api/locations.js' ;

Template.genericLocationList.helpers({
    getLocation: function() {
        return locations.find({});
    }
});

Template.genericLocationList.events({ 
    'click .addlocation': function() { 
        Router.go('/admin/locations/add')
    },
    'click .editlocation': function() { 
        Router.go('edit.location', {name: this.location})
    }
});