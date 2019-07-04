import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor' ;
 

import './genericList.js' ;
// import './genericRec.js' ;

Template.body.helpers({
  meteorconnected() {
    return Meteor.status().connected ;
  } 
});