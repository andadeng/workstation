// 增加网站设施相关
AdminDashboard.addSidebarItem('系统管理', {
  icon: 'sitemap',
  urls: [
    { title: '生成静态', url: AdminDashboard.path('/html') },
    // { title: '模板管理', url: AdminDashboard.path('/templates')}
  ]
});