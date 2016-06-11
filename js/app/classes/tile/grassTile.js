define(["Tile"],function(Tile){
  var grassTile = Tile.extend({
    init:function(id){
      this._super(Tile.assets.grass,id);
    }
  });
  return grassTile;
});
