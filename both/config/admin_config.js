AdminConfig = {
  name: {
  	first_name: "K",
  	mini_name: "WS",
  	large_name: "WorkStation",
  },
  dashboard: {
    homeUrl: '/admin',
    widgets: [{
      template: 'adminDefaultWidgets',
      data: {
        class: 'col-lg-3 col-xs-6'
      }
    }]
  },
  sidebar: {
  	dashboard: {
  		name: '控制面板'
  	}
  },
  skin: 'red',
  adminEmails: ['andy.deng@kyl.biz'],
  collections: {

    Columns: {
      label: '栏目',
      icon: 'columns',
      routes: {
        new: {waitOn: function(){return Meteor.subscribe('columns')}},
        edit: {waitOn: function(){return Meteor.subscribe('columns')}},
        view: {waitOn: function(){return Meteor.subscribe('columns')}},
        sub: {waitOn: function(){return Meteor.subscribe('columns')}}
      },
      tableColumns: [
        // { label: '栏目名称', name: 'name'},
        { label: '路径', name: 'allpath', template: 'column_level'},
        { label: '模块', name: 'module'},
        { label: '属性', name: 'type'}
      ],
      showSubColumn: true
    },

    Articles: {
      isHTML: true,
      label: '文章发布',
      icon: 'newspaper-o',
      routes: {
        new: {waitOn: function(){return Meteor.subscribe('columns')}},
        edit: {waitOn: function(){return Meteor.subscribe('columns')}},
        view: {waitOn: function(){return Meteor.subscribe('columns')}}
      },
      tableColumns: [
        { label: '文章标题', name: 'title'},
        { label: '路径', name: 'allpath', template: 'column_level'}
      ]
    },

    Pages: {
      isHTML: true,
      label: '单页面',
      icon: 'file-text-o',
      routes: {
        new: {waitOn: function(){return Meteor.subscribe('columns')}},
        edit: {waitOn: function(){return Meteor.subscribe('columns')}},
        view: {waitOn: function(){return Meteor.subscribe('columns')}}
      }
    },

    Templates: {
      label: '模板管理',
      icon: 'clipboard',
      routes: {
        new: {waitOn: function(){return Meteor.subscribe('columns')}},
        edit: {waitOn: function(){return Meteor.subscribe('columns')}},
        view: {waitOn: function(){return Meteor.subscribe('columns')}}
      },
      tableColumns: [
        { label: '模板名称', name: 'title'},
        { label: '路径', name: 'allpath', template: 'column_level'},
        // { label: '是否生成模板', name: 'isCreated'},
        { label: '类型', name: 'type'}
      ]
    },

    Generates: {
      label: '生成管理',
      icon: 'code',
      routes: {
        new: {waitOn: function(){return Meteor.subscribe('columns')}},
        edit: {waitOn: function(){return Meteor.subscribe('columns')}},
        view: {waitOn: function(){return Meteor.subscribe('columns')}}
      },
      tableColumns: [
        { label: '任务名称', name: 'title'},
        { label: '生成栏目', name: 'allpath', template: 'column_level'},
        // { label: '生成模板', name: 'template_id', template: 'template_name'},
        { label: '时间', name: 'createdAt', template: 'localeString'}
      ]
    }
    
  }
  // Disable editing of user fields:
  // userSchema: null

  // Use a custom SimpleSchema:
  // userSchema: new SimpleSchema({
  //   "profile": {
  //     type: Object,
  //     label: '简介'
  //   },
  //   'profile.gender': {
  //      type: String,
  //      label: '性别',
  //      allowedValues: ['male', 'female']
  //   },
  //   'profile.username': {
  //     type: String,
  //     label: '用户名'
  //   }
  // })
};

// 增加站点统计相关
// AdminDashboard.addSidebarItem('网站统计', {
//   icon: 'line-chart',
//   urls: [
//     { title: 'Statistics', url: AdminDashboard.path('/worklog/new') },
//     { title: 'Settings', url: AdminDashboard.path('/analytics/settings') }
//   ]
// });