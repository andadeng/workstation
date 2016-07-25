fs = Npm.require('fs')

Blaze.Template.registerHelper('include', function(template, data) {
  data = data || {};  
  return Spacebars.toHTML(data, Assets.getText(template));
});

Blaze.Template.registerHelper('toLocaleString', function(data) {
	return moment(data).format('YYYY-MM-DD');
})