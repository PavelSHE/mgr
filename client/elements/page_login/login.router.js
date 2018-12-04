// FlowRouter.route('/login', {
//   action: function() {
//     BlazeLayout.render('login_layout', { content: 'login' });
//   }
// });

import {publicRoutes} from '../../../lib/routerGroups/public.router';

publicRoutes.route('/login', {
      name: 'login',
      action: function() {
        BlazeLayout.render('login_layout', {content: 'login'});
      }
    }
);