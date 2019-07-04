import { Template } from 'meteor/templating';
 
import './genericList.html';
export const Students = new Mongo.Collection('Students');
 
Template.genericList.helpers({
  generics() {
    console.log(Students.find());
    return Students.find() ;
 }
});