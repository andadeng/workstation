Pages = new Mongo.Collection("pages");

Pages.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: '标题',
    max: 60
  },
  column_id: {
    type: String,
    label: "栏目",
    // defaultValue: "根目录",
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(请选择)",
      },
      options: function () {
        var options = [];
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
  content: {
    type: String,
    label: "内容",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        // lang: 'zh-CN',
        class: 'editor', // optional
        settings: {
        	height: 200,
        	// placeholder: 'write here...',
          fontNames: ['Microsoft YaHei', 'SimHei', 'SimSun', 'FangSong']
        }// summernote options goes here
      }
    }
  },
  picture: {
    type: String,
    label: "图片",
    autoform: {
      afFieldInput:{
        type: 'fileUpload',
        collection: 'Images',
        label: '请选择图片'
      }
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
  }
}));

Pages.before.update(function (userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  var Column_parent = Columns.findOne({_id: doc.column_id}).allpath;
  modifier.$set.allpath = Column_parent;
});

Pages.before.insert(function (userId, doc) {
  var Column_parent = Columns.findOne({_id: doc.column_id}).allpath;
  doc.allpath = Column_parent;
});