import { Template } from 'meteor/templating';
import './genericDeviceList.html'
import { devices } from '../../api/devices.js' ;

Template.genericDeviceList.helpers({
    getDevices: function() {
        return devices.find({});
    }
});

Template.genericDeviceList.events({ 
    'click .adddevice': function() { 
        Router.go('/admin/devices/add')
    },

    'click .editdevice': function(){
        Router.go('edit.devices', {name: this.MAC})
    } 
});