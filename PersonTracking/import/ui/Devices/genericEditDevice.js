import { Template } from 'meteor/templating';
import './genericEditDevice.html';
import { devices } from '../../api/devices.js';


Template.genericEditDevice.helpers({
    getCollection() {
        return devices
    }
});