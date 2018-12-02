FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render('login_layout', { content: 'login' });
  }
});