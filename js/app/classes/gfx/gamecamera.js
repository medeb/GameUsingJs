define(["Class"],function(Class){
  var xOffset,yOffset,handler;
  var gameCamera = Class.extend({
    init:function(_handler,_xOffset,_yOffset){
      handler = _handler;
      xOffset = _xOffset;
      yOffset = _yOffset;
    },
    centerOnEntity:function(e){
      xOffset = e.getX() - handler.getWidth()/2;
      yOffset = e.getY() - handler.getHeight()/2;
    },
    move:function(xAmnt,yAmnt){
      xOffset+=xAmnt;
      yOffset+=yAmnt;
    },
    getxOffset:function(){
      return parseInt(xOffset);
    },
    getyOffset:function(){
      return parseInt(yOffset);
    },
    setxOffset:function(offset){
      xOffset= offset;
    },
    setyOffset:function(offset){
      yOffset= offset;
    }
  });
  return gameCamera;
});
