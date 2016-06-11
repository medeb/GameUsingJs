define(["Class"],function(Class){
  var entity = Class.extend({
    init:function(handler,x,y,width,height){
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.handler=handler;
    },
    tick:function(dt){

    },
    render:function(g){

    },
    //getters
    getX:function() {
      return this.x;
    },
    getY:function() {
      return this.y;
    },
    getWidth:function() {
      return this.width;
    },
    getHeight:function() {
      return this.height;
    },
    //setters
    setX:function(x){
      this.x=x;
    },
    setY:function(y){
      this.y=x;
    },
    setX:function(width){
      this.width=width;
    },
    setX:function(height){
      this.height=height;
    }
  });
  return entity;
});
