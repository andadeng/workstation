Meteor.subscribe('columns')

Template.html.helpers({
	collections: function(){
		// var collections_obj = Meteor.connection._mongo_livedata_collections;
		var arr = _.values(AdminConfig.collections)
		return arr;
	},
	columns: function(){
		var columns = Columns.find();
		console.log(columns);
		return columns;
	}
})