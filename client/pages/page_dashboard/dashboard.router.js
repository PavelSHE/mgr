// FlowRouter.route('/', {
//     action: function() {
//         BlazeLayout.render('app_layout', { content: 'dashboard' });
//     }
// });

// import {privateRoutes} from '../../../lib/routerGroups/private.router';

FlowRouter.route('/', {
      //name: 'dashboard',
      action: function() {
        BlazeLayout.render('app_layout', {content: 'dashboard'});
      }
    }
);