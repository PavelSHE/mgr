import {farmsCollection} from "../../../lib/collections/farms.collection";
import { ReactiveDict } from 'meteor/reactive-dict';

Template.farmsPage.helpers({
    tasks :[],
});


Template.farmsPage.onCreated(function farmsPageOnCreated() {
    this.state = new ReactiveDict();

    this.subscription = Meteor.subscribe('farmsCollection');
    this.productsOnSale = farmsCollection.find().fetch();
    console.log(this.productsOnSale);
    this.loading = !this.subscription.ready();
});

