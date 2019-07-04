import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { ReactiveVar } from 'meteor/reactive-var';
import { Students } from '../imports/students.js';
import '../imports/persontracker.js'


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

var collections = [
  {collection:Students,listURL:'/students',labels:['Name','Course'],keyURL:'name',keyNames:['course']},
] ;

// var collections = [
//   {collection:Students,listURL:'/students',insertURL:'/studentPOST',updateURL:'/studentEDIT/',labels:['Name','Course'],keyURL:'name',keyNames:['course']},
// ] ;

_.each(collections,function(e) {
  // Router.route(e.insertURL,function() {
  //   this.layout('Collections-Data') ;
  //   this.render('Menu',{to:'Menu'})
  //   this.render('insertGeneric',{data:{genericCollection:e.collection,genericListURL:e.listURL}}) ;
  // }) ;
  // Router.route(e.listURL,function() {
  //   this.layout('Collections-Data') ;
  //   this.render('Menu',{to:'Menu'})
  //   this.render('genericList',
  //                {data:{genericLabels:e.labels,URLKeyName:e.keyURL,genericKeyNames:e.keyNames,
  //                       genericCollection:e.collection,genericInsertURL:e.insertURL,genericListURL:e.listURL,
  //                       genericUpdateURL:e.updateURL}}) ;
  // });
  Router.route(e.listURL,function() {
    this.layout('Collections-Data') ;
    this.render('Menu',{to:'Menu'})
    this.render('genericList',
                 {data:{genericLabels:e.labels,URLKeyName:e.keyURL,genericKeyNames:e.keyNames,
                        genericCollection:e.collection,genericListURL:e.listURL}}) ;
                        // console.log(e.collection, e.labels, e.listURL); //this value is tested and ok
                        // console.log(e.keyNames);
                        
                        
  });
  // Router.route(e.updateURL+':_id',function() {
  //   var id = this.params._id ;
  //   this.layout('Collections-Data') ;
  //   this.render('Menu',{to:'Menu'})
  //   this.render('updateGeneric',{
  //     data: {genericCollection:e.collection,genericListURL:e.listURL,genericId:id}
  //   }) ;
  // }) ;
}) ;
