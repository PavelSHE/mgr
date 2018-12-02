import {allowedLogins} from '../../../configuration/settings';

Template.signup.events({
  'submit form': function(event) {
    event.preventDefault();
    let emailVar = event.target.signupEmail.value;
    const passwordVar = event.target.signupPassword.value;
    if (!allowedLogins.includes(emailVar.toString().toLowerCase())){
      $(event.target.signupEmail).val("allowed users only...");
      $(event.target.signupPassword).val("");
      return false;
    }
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});

Template.signin.events({
  'submit form': function(event) {
    event.preventDefault();
    const emailVar = event.target.signupEmail.value;
    const passwordVar = event.target.signupPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
});


Template.signout.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});