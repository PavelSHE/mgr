import {getUser} from "../../../lib/services/users.system";

Template.app_header.helpers({
    currentUserName(){
      return getUser()
    },
});

Template.app_header.events({
  'click .app-logout': function() {
    event.preventDefault();
    alert("logOut");
    Meteor.logout();
  },

    'click .app-profile-menu': function (event) {
      Meteor.logout();
        //console.log(event);
        // let item = event.target;
        // //console.log(item);
        // let parent = $(item).closest("li");
        // console.log(parent);
        // if (parent.hasClass("show")) {
        //     parent.removeClass("show");
        //     (parent.children()[0]).attr("aria-expanded", "true");
        //     (parent.children()[1]).addClass("show");
        //     // parent.find("a").attr("aria-expanded", "true");
        //     // parent.find("div").addClass("show");
        // } else {
        //     parent.addClass("show");
        //     // $(".active").removeClass("active");
        //     // parent.addClass("active");
        //     // parent.find("a").attr("aria-expanded", "true");
        //     // parent.find("ul").attr("aria-expanded", "true");
        //     // parent.find("ul").addClass("in");
        // }
    }
});