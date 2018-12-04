import {farmsCollection} from '../../lib/collections/farms.collection';

export const farmsIndexes = function(){
    farmsCollection._ensureIndex({
    objectID: "text",
    name:"text"
  });
};
