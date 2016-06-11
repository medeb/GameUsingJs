define(["Class","ImageLoader","SpriteSheet"],function(Class,ImageLoader,SpriteSheet){
  var DEFAULT_WIDTH=32,DEFAULT_HEIGHT=32;
  var assets={};//an object
  var Assets = Class.extend({
    init:function (name,path,width,height) {
      assets[name]=this;
      //assets name so whenever we use that name we'll get the property of the image.
      this.name=name;
      this.path=path;
      this.width=width;
      this.height=height;
      this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));//now spritesheet class crop it and will return it
    } //^this.sheet = assets[name].sheet
  });
    Assets.DEFAULT_WIDTH=DEFAULT_WIDTH;//not necessary
    Assets.DEFAULT_HEIGHT=DEFAULT_HEIGHT;
    Assets.getAssets = function (name) {
      return assets[name];
    }//^ you can get your assets by using the name.
    //Player assets
   var player = new Assets("player","/games/res/images/mariom.png",28,42);
   player.idle = player.sheet.crop(3,0,28,42);
   //Tiles assets
   var tiles = new Assets("tiles","/games/res/images/tiles.png",30,30);
   tiles.dirt = tiles.sheet.crop(0,tiles.height*10,tiles.width,tiles.height);//t.h*10 is to select row no of the png
   tiles.grass = tiles.sheet.crop(0,tiles.height,tiles.width,tiles.height);
   tiles.stone = tiles.sheet.crop(0,tiles.height*7,tiles.width,tiles.height);
  return Assets;
});
//we'll use assets instead of imageLoader to grap the image we can do it using imageLoader class also
//so Class to make a constructor
//imageLoader to load the image
//and spritesheet to crop it
//all will happen in this assets class
