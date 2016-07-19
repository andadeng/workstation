fs = Npm.require('fs')

Blaze.Template.registerHelper('include', function(template, data) {
  data = data || {};
  return Spacebars.toHTML(data, Assets.getText(template));
});