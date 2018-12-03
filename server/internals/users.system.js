export const getUser = function () {
    return Meteor.user().emails[0].address
};