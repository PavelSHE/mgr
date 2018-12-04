import {Mongo} from 'meteor/mongo';
import {systemObjects, systemRadix} from './constants.system';

let obj = {};
obj.conn = new Mongo.Collection('systemIDs');

obj.init = function() {
  this.addType(systemObjects.farm.type);
  this.addType(systemObjects.box.type);
};
obj.addType = function(type) {
  if (this.conn.find({objectType: type}).count() === 0) {
    this.conn.insert({objectType: type, counter: 100000000});
  }
};

obj.newIDtoSystemObject = function(systemObject) {
  this.conn.update({objectType: systemObject.type}, {$inc: {counter: 1}});
  const n = this.conn.findOne({objectType: systemObject.type}).counter - 1;
  //return systemObject.prefix + n.toString().padStart(10, '0');
  return systemObject.prefix + n.toString(systemRadix);
};


export const systemIDs = obj;
