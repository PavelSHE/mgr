import {farms} from '../../lib/collections/farms.collection';

export const farmsIndexes = function(){
  farms._ensureIndex({
    objectID: "text",
    name:"text"
  });
};
