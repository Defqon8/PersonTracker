import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor' ;
 
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Students = new Mongo.Collection('Students');
Students.attachSchema(new SimpleSchema({
  name : {
    type:String,
    label:"Student name."
  },

  'name.$' : {
    type:String,
    autoform: {
      options :function () {
        return name.find().map(function (c) {
          return {label: c.name, value: c.name};
        });
      }
    }
  },

  course:{
          type:String,
          label:"Study Course"
  },

  'course.$':{
          type:String,
          autoform:{
                options: function (){
                        return course.find().map(function(c){
                        return {label: c.course, value: c.course}
                        })
                }
        }
  }

},{tracker:Tracker}));

