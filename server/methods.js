Meteor.methods({
  createTemplate: function(doc, data){
    // var compiled = SpacebarsCompiler.compile(doc.content, { isBody: true });
    // var fn = eval(compiled);
    // console.log(fn)
    // var html = Blaze.renderWithData(fn, data);
    // console.log(html)
    // var saved_content = Spacebars.toHTML(data, doc.content);
    var saved_path = process.env.PWD+'/private/';
    // switch(doc.type){
    //   case 0:
    //     saved_path += 'includes';breaks;
    //   case 1:
    //     saved_path += doc.module;breaks;
    // }
    // console.log(saved_content);
    fs.writeFile(saved_path + doc.filename, doc.content, (err)=> {
      if (!err){
        console.log('file saved:'+doc.filename)
      }else{
        console.log(err)
      }
    })
  },
	createHTML: function(doc, data){
    var saved_path = process.env.PWD+'/public/';
		fs.writeFile(saved_path + doc.filename, doc.content, (err)=> {
      if (!err){
        console.log('file saved:'+doc.filename)
      }else{
        console.log(err)
      }
    })
	}
})