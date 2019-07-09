import { Template } from 'meteor/templating';
import './genericEditLocation.html';
import { locations } from '../../api/locations.js';


Template.genericEditLocation.helpers({
    getCollection() {
        return locations
    }
});