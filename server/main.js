import { Meteor } from 'meteor/meteor';
import {systemIDs} from "./internals/IDs.system";

Meteor.startup(() => {
  // create base objects for systemIDs
    systemIDs.init();
});
