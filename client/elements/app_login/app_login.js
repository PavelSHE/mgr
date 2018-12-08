Template.app_login.events({
  'submit form': function(event) {
    event.preventDefault();
    const emailVar = event.target.loginEmail.value;
    const passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
    Meteor.call('farm.default',emailVar,(error,result)=>{
        if(error) return false;
    });
  }
});

