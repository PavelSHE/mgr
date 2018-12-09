FlowRouter.route('/f/:farmID', {
    action: function() {
        //console.log("going to farms");
        BlazeLayout.render('app_layout', { content: 'page_farm' });
    }
});