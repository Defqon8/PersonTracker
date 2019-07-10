import { Template } from 'meteor/templating';
import { pictures } from '../../api/pictures.js'
import { locations } from '../../api/locations.js'
import { devices } from '../../api/devices.js'
// import { services } from '../../api/services.js'
import './trackerpage.html'

Template.unknownLocation.helpers({
    unknownLocation() {
        console.log(pictures.find({'location.0':{$exists:false}}));
        return pictures.find({'location.0':{$exists:false}}); 
    }
});

Template.tracker.helpers({
    locations() {
        return locations.find({},{}) ;
    },
     
    haspersons() {
        var c = pictures.find({location:this.location}).count() ;
        if (c > 0) return true ;
        return false ;
    },
      
    knownperson(){
        console.log(pictures.find({location:this.location}));
        return pictures.find({location:this.location});
    }
});

Template.gateways.helpers({
    devices() {
        return devices.find({}) ;
    },
});

Template.serviceStatus.helpers({
    meteorconnected() {
        return Meteor.status().connected ;
    },

    // services() {
    //     return services.find({}) ;
    // },
});