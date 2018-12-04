import {farmsCollection} from "../../../lib/collections/farms.collection";
import {getUser} from "../../../lib/services/users.system";

Meteor.publish('farmsCollection', function farmsPublication() {
    return farmsCollection.find(); //{ owner: getUser()}
});