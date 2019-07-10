import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor' ;
import { locations } from './locations.js' ;

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const devices = new Mongo.Collection('devices');
devices.attachSchema(new SimpleSchema({
    location:{
        type:Array,
        label:"Locations where the user is active"
    },
    'location.$' : {
      type:String,
      autoform: {
        options :function () {
          return locations.find().map(function (c) {
            return {label: c.location, value: c.location};
          });
        }
      }
    },
    MAC:{
        type:String,
        label:"MAC Address"
    },
    status:{
        type:String,
        label:"Status of device"
    },
    scope:{
        type:String,
        label:"Scope"
    },
    RSSImin:{
        type:String,
        label:"RSSI"
    }
}))