import {farmsCollection} from "../../../lib/collections/farms.collection";



Template.page_farm.helpers({
    farmName(){
        let farmID = FlowRouter.getParam("farm");
        console.log(farmID);
        let farmObject  = farmsCollection.findOne({objectID: farmID})
        return farmObject.name || "bla";
    }
});