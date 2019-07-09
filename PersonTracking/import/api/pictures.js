import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { locations } from './locations.js' ;
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const pictures = new Mongo.Collection('pictures');
pictures.attachSchema(new SimpleSchema({
  fullname : {
    type:String,
    label:"Full name"
  },
  username : {
    type:String,
    label:"User Name"
  },
  source:{
    type:String,
    label: "Image"
  },
  function:{
      type:String,
      label:"Function of the user"
  },
  // location:{
  //     type:Array,
  //     label:"Locations where the user is active"
  // },
  // 'location.$' : {
  //   type:String,
  //   autoform: {
  //     options :function () {
  //    return locations.find().map(function (c) {
  //      return {label: c.fullname, value: c._id};
  //    });
  //    }
  //   }
  // },
  // scope:{
  //     type: Array,
  //     label: "Scope"
  // },
  // 'scope.$' : {
  //   type:String,
  //   autoform: {
  //     options :function () {
  //    return locations.find().map(function (c) {
  //      return {label: c.fullname, value: c._id};
  //    });
  //    }
  //   }
  // },
  beacon:{
      type:String,
      label: "Badge"
  }

},{tracker:Tracker}));