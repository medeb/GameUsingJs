define(["Class","TileLoader","Utils"],function(Class,Tile,Utils){
  var world = Class.extend({
    init:function(path,handler){
      this.tiles = [];
      this.loadworld(path);
      this.handler = handler;
    },
  loadworld:function(path){
    var file = Utils.loadFileAsString(path);
    var tokens = file.replace(/\n/g," ").split(" "); //same as explode if new line make a space
    this.width = tokens[0];
    this.height = tokens[1];
    this.spawnX = tokens[2]*Tile.tilewidth;
    this.spawnY = tokens[3]*Tile.tileheight;
    for(y= 0;y<this.height;y++){
      for(x=0;x<this.width;x++){
        if(!this.tiles[x])
          this.tiles[x] =[];
        this.tiles[x][y] =parseInt(tokens[(x+(y*this.width))+4]);
        }
      }
    },
    tick:function(dt){

    },
    render:function(g){
      for(y= 0;y<this.height;y++){
        for(x=0;x<this.width;x++){
         this.getTile(x,y).render(g,x*Tile.tilewidth - this.handler.getGameCamera().getxOffset(),
          y*Tile.tileheight - this.handler.getGameCamera().getyOffset());
        }
      }
    },
    getTile:function(x,y){
      return Tile.tiles[this.tiles[x][y]];
    }

  });
  return world;
});
