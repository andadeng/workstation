Template.AdminLayout.created = function () {
  var self = this;

  self.minHeight = new ReactiveVar(
    $(window).height() - $('.main-header').height());

  $(window).resize(function () {
    self.minHeight.set($(window).height() - $('.main-header').height());
  });

  $('body').addClass('fixed');
};

Template.AdminLayout.destroyed = function () {
  $('body').removeClass('fixed');
};

Template.AdminLayout.helpers({
  minHeight: function () {
    return Template.instance().minHeight.get() + 'px'
  }
});

Template.AdminHeader.onRendered(function () {
  $("body").addClass('sidebar-mini');
  // $("body").addClass('sidebar-collapse');
})

dataTableOptions = {
    "aaSorting": [],
    "bPaginate": true,
    "bLengthChange": false,
    "bFilter": true,
    "bSort": true,
    "bInfo": true,
    "bAutoWidth": false
};

Template.column_level.helpers({
  level_string: function(){
    var allpath = this.value.split(','), columns_string, allpath_string = '';

    allpath.forEach(function (value) {
      if (value !== '0') {
        columns_string = " > " + "<a href='/admin/Columns/" + value + "/sub'>" + (Columns.findOne({_id: value}).name) + "</a>";
      }else{
        columns_string = ('根目录');
      }
      allpath_string += columns_string
    });

    return allpath_string;
  }
}) 

Template.localeString.helpers({
  localeString: function(){
    return this.value.localeString();
  }
})