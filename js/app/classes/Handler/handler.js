define(["Class"],function(Class){
  var game;
  var handler = Class.extend({
    init:function(_game){
      game=_game;
    },
    getWidth:function(){
      return game.getWidth();
    },
    getHeight:function(){
      return game.getHeight();
    },
    getKeyManager:function(){
      return game.getKeyManager();
    },
    getGameCamera:function(){
      return game.getGameCamera();
    }
  });

  return handler;
});
