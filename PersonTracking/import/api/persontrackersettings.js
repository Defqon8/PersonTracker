import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const settings = new Mongo.Collection('persontrackersettings');
settings.attachSchema(new SimpleSchema({
  kafkahost : {
    type:String,
    label:"Full name"
  },
  kafkaport : {
    type:String,
    label:"User Name"
  },
  schemaregistryurl:{
    type:String,
    label: "Image"
  }

},{tracker:Tracker}));