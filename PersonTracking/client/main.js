import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { ReactiveVar } from 'meteor/reactive-var';
import '../import/ui/CollectedJS.js'
import './main.html';
import '../import/ui/adminMenu.html'
import { pictures } from '../import/api/pictures.js' ;
import { devices } from '../import/api/devices.js' ;
import { locations } from '../import/api/locations.js' ;



Router.route('/', function () {
  this.layout('Menu')
});

Router.route('/tracker', function () {
  this.layout('');
  this.render('');
});

Router.route('admin',function(){
  this.layout('adminLayout');
  this.render('adminMenu')
})

// #region users
Router.route('admin/users',function(){
  this.layout('adminLayout');
  this.render('genericUserList')
})

//form doesn't submit
Router.route('admin/user/add',function(){
  this.layout('adminLayout');
  this.render('genericAddUser', {data:{pictures}})
})

Router.route('admin/user/:name',{
  name: "edit.user",
  action: function(){
    var edituser = pictures.find({username: this.params.name}).fetch();
    this.layout('adminLayout');
    this.render('editUserHolder', {data:{pictures: edituser[0]}})
  },
  fastrender: true,
  pictures: this
})
// #endregion

// #region devices
Router.route('admin/devices',function(){
  this.layout('adminLayout');
  this.render('genericDeviceList')
})


Router.route('admin/devices/add',function(){
  this.layout('adminLayout');
  this.render('genericAddDevice', {data:{devices}})
})

Router.route('admin/devices/:name',{
  name: "edit.devices",
  action: function(){
    var editdevice = devices.find({MAC: this.params.name}).fetch();
    this.layout('adminLayout');
    this.render('genericEditDevice', {data:{devices: editdevice[0]}})
  },
  fastrender: true,
  devices: this
})
// #endregion

// #region locations
Router.route('admin/locations',function(){
  this.layout('adminLayout');
  this.render('genericLocationList')
})

Router.route('admin/locations/add',function(){
  this.layout('adminLayout');
  this.render('genericAddLocation', {data:{locations}})
})

Router.route('admin/locations/:name',{
  name: "edit.location",
  action: function(){
    var editlocation = devices.find({location: this.params.name}).fetch();
    this.layout('adminLayout');
    this.render('genericEditDevice', {data:{locations: editlocation[0]}})
  },
  fastrender: true,
  locations: this
})
//#endregion







