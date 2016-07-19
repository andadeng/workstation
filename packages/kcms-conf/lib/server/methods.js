// var fs = Npm.require('fs');
// var path = Npm.require('path');

// var fd = process.env.PWD + '/private/templates';

// // console.log(fd)

// var files = fs.readdirSync(fd);
// // files.forEach(function(filename){
// // 	console.log(filename)
// // })

// function travel(dir, callback) {
//   fs.readdirSync(dir).forEach(function (file) {
//       var pathname = path.join(dir, file);

//       if (fs.statSync(pathname).isDirectory()) {
//           travel(pathname, callback);
//       } else {
//           callback(pathname);
//       }
//   });
// }

// function is_filetype(filename, types) { 
// 	types = types.split(','); 
// 	var pattern = '\.('; 
// 	for(var i=0; i<types.length; i++) { 
// 		if(0 != i) { 
// 			pattern += '|'; 
// 		} 
// 		pattern += types[i].trim(); 
// 	} 
// 	pattern += ')$'; 
// 	return new RegExp(pattern, 'i').test(filename); 
// }; 

// // travel(fd, function(file){
// // 	if (is_filetype(file, 'html')) console.log(file)
// // })