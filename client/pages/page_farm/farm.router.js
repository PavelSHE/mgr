FlowRouter.route('/farm/:farmID', {
    action: function() {
        BlazeLayout.render('app_layout', { main: 'page_farm' });
    }
});