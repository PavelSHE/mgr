import {boxesCollection} from '../../../lib/collections/boxes.collection';
import {getUser} from '../../../lib/services/users.system';
import {farmsCollection} from '../../../lib/collections/farms.collection';

Template.dashboard.helpers({
  countMyBoxes: function() {
    return boxesCollection.find({owner:getUser()}).count()
  },
  countMyFarms:function() {
    return farmsCollection.find({owner:getUser()}).count()
  },
  countBoxesAlerts: function() {
    return 0
  },
  countBatchesInProgress: function() {
    return 2
  },
  getNextCuredBatch:function() {
    return " in 32 hours"
  }

});