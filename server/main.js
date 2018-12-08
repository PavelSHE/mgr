import {Meteor} from 'meteor/meteor';
import {systemIDs} from './internals/IDs.system';
import {farmsIndexes} from './indexes/farms.indexes';
import {Accounts} from 'meteor/accounts-base'

Meteor.startup(() => {
    // create base objects for systemIDs
    systemIDs.init();
    farmsIndexes();

    for (const email of ["one@dcure.com", "two@dcure.com"]) {
        if (!(Accounts.findUserByEmail(email))) {
            Accounts.createUser({
                email: email,
                password: "123"
            });
            console.log("created " + email);
        }

    }
});


