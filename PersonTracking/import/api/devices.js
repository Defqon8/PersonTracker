import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor' ;

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const devices = new Mongo.Collection('devices');
devices.attachSchema(new SimpleSchema({
    location:{
        type:String,
        label:"Location"
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