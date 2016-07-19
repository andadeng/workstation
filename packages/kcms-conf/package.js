Package.describe({
  name: "kcms-conf",
  summary: "A config package for kcms",
  version: "0.0.1",
  git: "https://github.com/andadeng/kcms-conf"
});

Package.on_use(function(api){

  both = ['client','server']

  api.versionsFrom('METEOR@1.0');

  api.use(
    ['iron:router@1.0.9',
    'coffeescript',
    'kcms',
    'aldeed:tabular@1.6.1',
    'aldeed:collection2@2.5.0'
    ],
    both);

  api.use(['less@1.0.0 || 2.5.0','session','jquery','templating','blaze'],'client')

  api.add_files([
    'lib/both/admin_config.js',
    'lib/both/collections.js',
    'lib/both/router.js',
    'lib/both/templates.js'
    ], both);

  api.add_files([
    'lib/client/html/tohtml.html',
    'lib/client/js/tohtml.js'
    ], 'client');

  api.add_files([
    'lib/server/methods.js',
    'lib/server/startup.js',
    'lib/server/templates.js'
  ], 'server');
});
