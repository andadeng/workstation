Columns = new Mongo.Collection("columns");

Columns.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: '栏目名称',
    max: 60
  },
  type: {
    type: String,
    label: '栏目类型',
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(请选择)"
      },
      options: function () {
        return [
          { label: "主页", value: "home_page"},
          { label: "栏目页", value: "column_page"},
          { label: "静态页面", value: "static_page"},
          { label: "内容发布", value: "content"},
        ]
      }
    }
  },
  module: {
    type: String,
    optional: true,
    label: '关联模块',
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(请选择)"
      },
      options: function () {
        var options = [];
        var arr = _.values(AdminConfig.collections);
        arr.forEach(function(element){
          if (element.isHTML) {
            options.push({
              label: element.label, value: element.name
            })
          }
        })

        return options;
      }
    }
  },
  parent_id: {
    type: String,
    label: "父栏目",
    // defaultValue: "根目录",
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(请选择)",
      },
      options: function () {
      	var options = [{label: '根目录', value: '0'}];
        Columns.find({}, {sort: {allpath: 1}}).forEach(function (element) {
          var blank_array = new Array();

          for (var i = 0; i < parseInt(element.level)-1; i++) {
            blank_array.push("-")
          }
          
          options.push({
            label: blank_array.join("") + element.name, value: element._id
          })
        });
        return options;
      }
    }
  },
  allpath: {
    type: String,
    autoValue: function(){
      if (this.isInsert) {
        return '0';
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  level: {
    type: String,
    // optional: true,
    autoValue: function(){
      if (this.isInsert) {
        return '0';
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    },
    autoform: {
    	type: 'hidden'
    }
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function () {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },
    autoform: {
    	type: 'hidden'
    }
  }
}));


Columns.before.update(function (userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  var Column_parent = Columns.findOne({_id: doc.parent_id});
  var doc_allpath = new Array;
  if (!Column_parent){
    doc_allpath.push('0');
  }else{
    doc_allpath = Column_parent.allpath.split(',');
  }
  doc_allpath.push(doc._id);
  modifier.$set.allpath = doc_allpath.toString();
  modifier.$set.level = doc_allpath.length;
});

Columns.before.insert(function (userId, doc) {
  var Column_parent = Columns.findOne({_id: doc.parent_id});
  var doc_allpath = new Array;
  if (!Column_parent){
    doc_allpath.push('0');
  }else{
    doc_allpath = Column_parent.allpath.split(',');
  }
  doc_allpath.push(doc._id);
  doc.allpath = doc_allpath.toString();
  doc.level = doc_allpath.length;
});

