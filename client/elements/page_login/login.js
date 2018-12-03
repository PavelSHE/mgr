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
    Meteor.loginWithPassword(emailVar, passwordVar);
    Meteor.call('farm.default',(error,result)=>{
      if(error) return false;
      if(result) return true;
    });
  }
});

Template.signin.events({
  'submit form': function(event) {
    event.preventDefault();
    const emailVar = event.target.signupEmail.value;
    const passwordVar = event.target.signupPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
    // Meteor.call('farm.default',emailVar,(error,result)=>{
    //     if(error) return false;
    // });
  }
});


Template.signout.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});