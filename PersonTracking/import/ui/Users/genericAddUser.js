import { Template } from 'meteor/templating';
import { pictures } from '../../api/pictures.js'
import './genericAddUser.html'

pictures.after.insert(function(){
    Router.go('admin/pictures')
})