Template.app_header.events({
  'click .app-logout': function() {
    event.preventDefault();
    alert("logOut");
    Meteor.logout();

  }
});