import {farmsCollection} from "../../../lib/collections/farms.collection";
import {boxesCollection} from '../../../lib/collections/boxes.collection';
import {getUser} from '../../../lib/services/users.system';



Template.page_farm.helpers({
    getFarmObject(){
        let farmID = FlowRouter.getParam("farmID");
        //console.log(farmID);
        return farmsCollection.findOne({objectID: farmID}) || {};
    },
  theadBoxesElement(){
        let elem = "";
    for (const hd of boxesTableHeaders){
        elem = elem + "<th>" + hd +  "</th>"
    }
    return "<thead>"+ "<tr>" + elem + "</tr>" + "<thead>"
  },
  farmBoxes(){
    console.log("getting boxes");
      return boxesCollection.find({owner:getUser()}).fetch();
  }
});

const boxesTableHeaders = ["#","Name", "Description", "Status","Temperature","Humidity","Updated","Type","Started"];

Template.page_farm.events({
  'click .app-add-box': function(event) {
    event.preventDefault();
    console.log("adding box");
    Meteor.call('box.getNewID',(error,result)=>{
      console.log(result);
      FlowRouter.go(FlowRouter.current().path + /add/ + result);
    });

  }
});