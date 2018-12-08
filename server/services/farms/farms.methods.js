import {farmsCollection} from "../../../lib/collections/farms.collection";
import {systemIDs} from "../../internals/IDs.system";
import {systemObjects, systemRoles} from "../../internals/constants.system";
import {permissions} from "../permissions/permissions.model";
import{getUser} from '../../../lib/services/users.system';


Meteor.methods({
    'farm.default'() {
        let frm = '';
        const user = getUser();
        const newFarmId = systemIDs.newIDtoSystemObject(systemObjects.farm);
        if (farmsCollection.find({owner: user}).count() <= 0) {
            frm = farmsCollection.insert({
                objectID: newFarmId,
                name: 'default farm',
                description: `first farm for ${user}`,
                owner: user,
                createdAt: new Date()
            });

        }
        //permissions.addPermission(farmsCollection.findOne({_id:frm}),user,systemRoles.owner);
        permissions.addPermission(newFarmId, user, systemRoles.owner);
    },
});
