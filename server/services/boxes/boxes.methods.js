import {systemIDs} from '../../internals/IDs.system';
import {systemObjects} from '../../internals/constants.system';

Meteor.methods({
  'box.getNewID'() {
    return systemIDs.newIDtoSystemObject(systemObjects.box);
  }
});
