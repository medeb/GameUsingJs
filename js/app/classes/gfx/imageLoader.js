//this class is for images
define(function(){
  var imageLoader = {};//this means object
  imageLoader.loadImage = function(path){
    var image = new Image();
    image.src=path;
    return image;
  }
  return imageLoader;
});
