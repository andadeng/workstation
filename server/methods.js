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
    var saved_path = process.env.PWD+'/public/';
    
    if (doc.template_id)
      var content = Templates.findOne({_id: doc.template_id}).content;

    var data = {newsList: {newsList:Articles.find({},{sort:{createAt:-1}}).fetch()}};

    var html = Spacebars.toHTML(data, content);

		fs.writeFile(saved_path + doc.filename, html, (err)=> {
      if (!err){
        console.log('file saved:'+doc.filename)
      }else{
        console.log(err)
      }
    })
	}
})