import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor' ;

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const locations = new Mongo.Collection('locations');
locations.attachSchema(new SimpleSchema({
    location:{
        type:String,
        label:"Location"
    },
    locationtype:{
        type:String,
        label:"Type of location"
    },
    sortorder:{
        type:String,
        label:"Sort order"
    },
    scope:{
        type:String,
        label:"Scope"
    }
}))