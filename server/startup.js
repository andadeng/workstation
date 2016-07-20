// Meteor.startup(function(){
// 	console.log('startup')
// 	// var data = {
// 	// 	abc: [
// 	// 		{label:'1', value: '1'},
// 	// 		{label:'2', value: '2'}
// 	// 	]
// 	// }
// 	var data = {
// 		abc:{
// 			abc:'123'
// 		}
// 	};
// 	// var content = '{{#each abc}}<li>label:{{label}}|value:{{value}}</li>{{/each}}'
// 	var content = "{{{include 'footer.html' abc}}}"
// 	var html = Spacebars.toHTML(data, content);
// 	console.log(html);
// })