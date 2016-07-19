Package.describe({
  name: "kcms",
  summary: "A complete admin dashboard solution",
  version: "0.0.1",
  git: "https://github.com/andadeng/kcms"
});

Package.on_use(function(api){

  both = ['client','server']

  api.versionsFrom('METEOR@1.0');

  api.use(
    ['iron:router@1.0.9',
    'coffeescript',
    'underscore',
    'reactive-var',
    'check',
    'aldeed:collection2@2.5.0',
    'aldeed:autoform@5.5.1',
    'aldeed:template-extension@3.4.3',
    'alanning:roles@1.2.13',
    'raix:handlebar-helpers@0.2.5',
    'reywood:publish-composite@1.4.2',
    'momentjs:moment@2.10.6',
    'aldeed:tabular@1.6.1',
    'meteorhacks:unblock@1.1.0',
    'zimme:active-route@2.3.2',
    'mfactory:admin-lte@0.0.2',
    'fortawesome:fontawesome@4.5.0',
    'yogiben:autoform-file@0.4.2',
    'cfs:standard-packages@0.5.9',
    'cfs:gridfs@0.0.33',
    'matb33:collection-hooks@0.8.1',
    'mpowaga:autoform-summernote@0.4.2',
    'meteorhacks:ssr@2.2.0'
    ],
    both);

  api.use(['less@1.0.0 || 2.5.0','session','jquery','templating'],'client')

  api.use(['email','blaze'],'server')

  api.add_files([
    'lib/both/AdminDashboard.coffee',
    'lib/both/router.coffee',
    'lib/both/utils.coffee',
    'lib/both/startup.coffee',
    'lib/both/collections.coffee',
    // 'lib/client/lang/accounts-entry-zh-CN.js'
    ], both);

  api.add_files([
    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/admin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/html/admin_footer.html',
    'lib/client/css/admin-custom.less',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/templates.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/slim_scroll.js',
    'lib/client/js/autoForm.coffee',
    'lib/client/js/entry_config.js',
    'lib/client/lang/summernote-zh-CN.js',
    'lib/client/lang/tabular-zh-CN.js',
    'lib/client/lang/autoform-zh-CN.js',
    ], 'client');

  api.add_files([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee'
    ], 'server');

  api.export('AdminDashboard',both)
});
