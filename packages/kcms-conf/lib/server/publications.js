Meteor.publish('columns', function(){
    return Columns.find();
});
