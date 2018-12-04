import {Mongo} from "meteor/mongo";
import {systemObjects} from "../../internals/constants.system";
import {getUser} from '../../../lib/services/users.system';

let obj = {};
obj.conn = new Mongo.Collection('permissions');

obj.addPermission = function (objectID, user, role) {
    //const prefix = objectID.replace(/[0-9]/g, '');
    const prefix = objectID.substring(0, 3);
    let objectType = -1;
    for (let key in systemObjects) {
        if (systemObjects[key].prefix === prefix) {
            objectType = systemObjects[key].type;
        }
    }
    if (objectType < 0) {
        console.log("unknownType");
        return false;
    };
    this.conn.insert({objectID: objectID, objectType: objectType, user: user, role: role});
    return true;
};

obj.listPermissionForObjectType = function (objectType) {
    return this.conn.find({objectType: objectType, user: getUser()}.objectID);
};

export const permissions = obj;