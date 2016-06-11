define(["Class","Assets"],function(Class,Assets){
  var tilewidth=32,
      tileheight=32;
  var tiles = [];
  var tile = Class.extend({
    init:function(texture,id){
      this.texture = texture;
      this.id = id;
      tiles[id]=this;//we're actually set the instances that is created!
    },
    tick:function(dt){
    },
    render:function(g,x,y){
      g.mydrawImage(this.texture,x,y,tilewidth,tileheight);
    },
    getId:function(){
      return this.id;
    },
    isSolid:function(){
      return false;
    }
  });
  tile.tiles = tiles;
  tile.tilewidth = tilewidth;
  tile.tileheight = tileheight;
  tile.assets = Assets.getAssets("tiles");
  return tile;
});
