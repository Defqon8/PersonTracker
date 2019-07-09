import { Template } from 'meteor/templating';
import './genericEditLocation.html';
import { locations } from '../../api/locations.js';


Template.genericEditLocation.helpers({
    getCollectionLocation() {
        return locations
    }
});

locations.after.update(function(){
    Router.go('admin/locations')
})