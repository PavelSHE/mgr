FlowRouter.route('/f/:farmID/add/:boxID', {
  action: function() {
    //console.log("going to farms");
    BlazeLayout.render('app_layout', { content: 'page_box' });
  }
});