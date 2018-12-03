import {Mongo} from 'meteor/mongo';
import {systemObjects} from "./constants.system";

let obj = {};
obj.conn = new Mongo.Collection('systemIDs');


obj.init = function () {
    this.addType(systemObjects.farm.type, 1);
    this.addType(systemObjects.box.type, 1);
};
obj.addType = function (type, counter) {
    if (this.conn.find({objectType: type}).count() === 0) {
        this.conn.insert({objectType: type, counter: counter});
    }
};

obj.newIDtoSystemObject = function (systemObject) {
    this.conn.update({objectType: systemObject.type}, {$inc: {counter: 1}});
    const n = this.conn.findOne({objectType: systemObject.type}).counter -1;
    return systemObject.prefix + n.toString().padStart(10, '0');
};

// systemIDs.newFarmId = function () {
//     systemIDs.update({objType: 'farm'},
//         {$inc: {counter: 1}});
//     const n = systemIDs.findOne({objType: 'farm'}).counter - 1;
//     console.log("farms counter " + n.toString());
//     const newId = "frm" + n.toString().padStart(5, '0');
//     console.log("allocated farm : " + newId);
//     return newId;
// };


export const systemIDs = obj;
