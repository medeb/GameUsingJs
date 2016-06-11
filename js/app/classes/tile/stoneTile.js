define(["Tile"],function(Tile){
  var stoneTile = Tile.extend({
    init:function(id){
      this._super(Tile.assets.stone,id);
    },
    isSolid:function(){
      return true;
    }
  });
  return stoneTile;
});
