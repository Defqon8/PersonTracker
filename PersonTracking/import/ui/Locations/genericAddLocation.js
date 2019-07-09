import { Template } from 'meteor/templating';
import { locations } from '../../api/locations.js'
import './genericAddLocation.html'

Template.genericAddLocation.helpers({
    getCollection() {
        return locations
    }
});