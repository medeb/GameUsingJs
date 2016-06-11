define(["Tile"],function(Tile){
  var dirtTile = Tile.extend({
    init:function(id){
      this._super(Tile.assets.dirt,id);
    }
  });
  return dirtTile;
});
