import { Template } from 'meteor/templating';
 
import './genericList.html';
 
Template.genericList.helpers({
   generics() {
      // console.log(this.genericCollection.find({}));
      return this.genericCollection.find({}) ;
   },
   genericURLValue() {
      console.log(this[Template.parentData().URLKeyName]);
      return this[Template.parentData().URLKeyName] ;
   },
   genericKeyNames() {
      console.log(Template.parentData().genericKeyNames);
      return Template.parentData().genericKeyNames ;
   },
   genericKeyValue(key) {
      if (_.isString(key)) return this[key] ;
      else {
         var join = key.collection.findOne({_id:this[key.name]});
          return join[key.joinkey] ;
      }
   }
});

// Template.genericList.events({
//   'click .addList'(event,instance) {
// console.log('template instance data ',instance.data);
//     Router.go(instance.data.genericInsertURL) ;
//   },
//   'click .backList'(event,instance) {
//     Router.go('/') ;
//   }
// });