import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { ReactiveVar } from 'meteor/reactive-var';
import "/import/genericList.html"


import './main.html';

Router.route('/', function () {
  this.layout('Live-Data');
  this.render('Menu', {to: 'Menu'});
  this.render('LiveDataPage');
});

Router.route('/demodata', function () {
  this.layout('Demo-Data');
  this.render('Menu', {to: 'Menu'});
  this.render('DemoDataPage');
});

Router.route('/collections', function () {
  this.layout('Collections-Data');
  this.render('Menu', {to: 'Menu'});
  this.render('CollectionsPage');
});

Router.route('/accounts', function () {
  this.layout('Accounts-Data');
  this.render('Menu', {to: 'Menu'});
  this.render('AccountsPage');
});


export const Students = new Mongo.Collection('Students');
 
Template.genericList.helpers({
  generics() {
    console.log(Students.find());
    
    return Students.find() ;
 }
});

Router.route('/collections/students', function(){
  this.subscribe("Students");
  this.layout('Collections-Data');
  this.render('genericList',{});
  });
