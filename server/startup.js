// Meteor.startup(function(){
// 	console.log('startup')
// 	// var data = {
// 	// 	abc: [
// 	// 		{label:'1', value: '1'},
// 	// 		{label:'2', value: '2'}
// 	// 	]
// 	// }

// 	// var data = {data: {newsList: Articles.find({column_id: 'ymEv4GuSZddnbC4qf'},{sort:{createAt:-1}}).fetch()}};
// 	// var data = {
// 	// 		data: {
// 	// 			data: { 
// 	// 				newsList: Articles.find({column_id: 'ymEv4GuSZddnbC4qf'},{sort:{createAt:-1}, limit:1, skip:1}).fetch()
// 	// 			}
// 	// 		}
// 	// 	}
// 	var data = {};

// 	// var content = '{{#each abc}}<li>label:{{label}}|value:{{value}}</li>{{/each}}'
// 	// var content = "{{{include 'news.html' data}}}"
// 	var content = "{{{include 'header.html'}}}{{#each data.data.newsList}}<li>{{title}}<span>{{{toLocaleString createdAt}}}</span></li>{{/each}}{{{include 'pager.html' pager}}}{{{include 'footer.html'}}}"


// 	var filename = 'newsList.html';
// 	filename = filename.split('.')[0];
// 	console.log(filename);

// 	// 1.Get recodesNum in configuration.	
// 	var configNum = AdminConfig.collections['Articles'].recordsNum;
// 	console.log(configNum);

// 	// 2.Get dataset's recodes number.
// 	var datasetNum = Articles.find({column_id: 'ymEv4GuSZddnbC4qf'}).count()
// 	console.log(datasetNum);

// 	// 3.calculate page number.
// 	var pageNum = Math.ceil(datasetNum / configNum);
// 	console.log(pageNum);

// 	// 4.do for loop.
// 	for (var i = 0;i < pageNum; i++) {
// 		var pageRecordsNum = parseInt(datasetNum/pageNum)*(i+1), limitNum = configNum, skipNum = i*configNum;

// 		var prevLink=filename+i+'.html', prevClass, nextLink=filename+(i+2)+'.html', nextClass;

// 		if(i==0){prevClass="disabled"; prevLink="#"}else{prevClass=""};
// 		if(i==pageNum-1){nextClass="disabled"; nextLink="#"}else{nextClass=""};

// 		data = {
// 			data: {
// 				data: { 
// 					newsList: Articles.find({column_id: 'ymEv4GuSZddnbC4qf'}, {sort: {createdAt: -1}, limit: limitNum, skip: skipNum}).fetch()
// 				}
// 			},
// 			pager: {
// 				prev: { link: prevLink, disabled: prevClass},
// 				next: { link: nextLink, disabled: nextClass}
// 			}
// 		}

// 		var html = Spacebars.toHTML(data, content);
// 		console.log(html);
// 	}

// })