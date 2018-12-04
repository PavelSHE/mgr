import {Meteor} from 'meteor/meteor';
import {systemIDs} from './internals/IDs.system';
import {farmsIndexes} from './indexes/farms.indexes';

Meteor.startup(() => {
  // create base objects for systemIDs
  systemIDs.init();
  farmsIndexes();
});
