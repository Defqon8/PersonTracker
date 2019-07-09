import { Template } from 'meteor/templating';
import { devices } from '../../api/devices.js'
import './genericAddDevice.html'

Template.genericAddDevice.helpers({
    getCollection() {
        return devices
    }
});

devices.after.insert(function(){
    Router.go('admin/devices')
})