fs = Npm.require('fs')

Blaze.Template.registerHelper('include', function(template, data) {
  data = data || {};  
  console.log(template)
  return Spacebars.toHTML(data, Assets.getText(template));
});