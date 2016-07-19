Router.route("html",{
	path: "/admin/html",
	template: "html",
	controller: "AdminController",
	onAfterAction: function(){
		Session.set('admin_title', '生成静态');
		Session.set('admin_subtitle', 'Generation the HTML files.');
	}
})

Router.route("gen",{
	path: "/admin/html/gen",
	template: "htmlGen",
	controller: "AdminController",
	onAfterAction: function(){
		Session.set('admin_title', '生成静态');
		Session.set('admin_subtitle', 'Generation the HTML files.');
	}
})

// Router.route("templates",{
// 	path: "/admin/templates",
// 	template: "templates",
// 	controller: "AdminController",
// 	onAfterAction: function(){
// 		Session.set('admin_title', '模板管理');
// 		Session.set('admin_subtitle', 'Manage all templates.');
// 	},
// 	// data: function(){
// 	// 	return {
// 	// 		// admin_table: AdminTables.Users	
// 	// 	}
// 	// }
// })