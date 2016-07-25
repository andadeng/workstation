Meteor.methods({
  createTemplate: function(doc){
    var saved_path = process.env.PWD+'/private/';
    fs.writeFile(saved_path + doc.filename, doc.content, (err)=> {
      if (!err){
        console.log('file saved:'+doc.filename)
      }else{
        console.log(err)
      }
    })
  },

	createHTML: function(doc){
    var tpl = Templates.findOne({_id: doc.template_id});
    var data = {};

    switch(tpl.module){
      case 'Articles':
        var filename = tpl.filename;
        filename = filename.split('.')[0];

        // 1.Get recodesNum in configuration. 
        var configNum = AdminConfig.collections[tpl.module].recordsNum;

        // 2.Get dataset's recodes number.
        var datasetNum = Articles.find({column_id: tpl.column_id}).count()

        // 3.calculate page number.
        var pageNum = Math.ceil(datasetNum / configNum);

        // 4.do for loop.
        for (var i = 0;i < pageNum; i++) {

          var pageRecordsNum = parseInt(datasetNum/pageNum)*(i+1), limitNum = configNum, skipNum = i*configNum;

          var prevLink=filename+i+'.html', prevClass, nextLink=filename+(i+2)+'.html', nextClass;

          tpl.filename = filename+(i+1)+'.html';

          if (i==0){
            tpl.filename = filename+'.html';
            prefLink = tpl.flename;
          }

          if(i==0){prevClass="disabled"; prevLink="#"}else{prevClass=""};
          if(i==pageNum-1){nextClass="disabled"; nextLink="#"}else{nextClass=""};

          data = {
            data: {
              newsList: Articles.find({column_id: 'ymEv4GuSZddnbC4qf'}, {sort: {createdAt: -1}, limit: limitNum, skip: skipNum}).fetch()
            },
            pager: {
              prev: { link: prevLink, disabled: prevClass},
              next: { link: nextLink, disabled: nextClass}
            }
          }
          toHtml(data, tpl.content, tpl.filename);
        }
        break;
        
      case 'Pages':
        data = {data: {page: Pages.findOne({column_id: tpl.column_id})}};
        toHtml(data, tpl.content, tpl.filename);
        break;
    }

    
	}
})

function toHtml(data, content, filename){
  var saved_path = process.env.PWD+'/public/';
  var html = Spacebars.toHTML(data, content);
  console.log(filename);
  fs.writeFile(saved_path + filename, html, (err)=> {
    if (!err){
      console.log('file saved:'+filename)
      return filename;
    }else{
      console.log(err)
      return err;
    }
  })
}