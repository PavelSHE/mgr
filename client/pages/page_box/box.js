import { ReactiveDict } from 'meteor/reactive-dict';
import {getUser} from '../../../lib/services/users.system';
import {boxesCollection} from '../../../lib/collections/boxes.collection';

Template.page_box.onRendered(function page_boxOnCreated() {
  this.state = new ReactiveDict();
  $('[name="farmID"]').val(FlowRouter.getParam("farmID"));
  $('[name="boxID"]').val(FlowRouter.getParam("boxID"));
  $('[name="owner"]').val(getUser());
});



Template.page_box.events({
  'click .app-save-new-box': function(event) {
    event.preventDefault();
    boxesCollection.insert({
      objectID: $('[name="boxID"]').val(),
      name:$('[name="boxName"]').val(),
      description:$('[name="boxDescription"]').val(),
      farmID: $('[name="farmID"]').val(),
      owner: $('[name="owner"]').val(),
      createdAt: new Date()
    });
    FlowRouter.go("/f/"+ $('[name="farmID"]').val());
  }
});