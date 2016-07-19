@AdminCollectionsCount = new Mongo.Collection 'adminCollectionsCount'

# @Columns = new Mongo.Collection 'columns'

@Images = new FS.Collection("images",
  stores: [new FS.Store.GridFS("images", {})]
)

Images.allow
  insert: (userId, doc) ->
    true
  download: (userId)->
    true