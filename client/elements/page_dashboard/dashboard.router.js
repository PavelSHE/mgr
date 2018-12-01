FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('app_layout', { content: 'dashboard' });
    }
});