FlowRouter.route('/farms', {
    action: function() {
        BlazeLayout.render('blank_layout', { content: 'farms' });
    }
});