define(["Entity"],function(Entity){
  var DEFAULT_CREATURE_WIDTH=64,
      DEFAULT_CREATURE_HEIGHT=64,
      DEFAULT_SPEED=250,
      DEFAULT_HEALTH=10;

  var creature = Entity.extend({
    init:function(handler,x,y,width,height){
      this._super(handler,x,y,width,height);
      this.health = DEFAULT_HEALTH;
      this.speed = DEFAULT_SPEED;
      this.xMove=0;
      this.yMove=0;
    },
    move:function() {
      this.moveX();
      this.moveY();
    },
    moveX:function(){
        this.x+=this.xMove;
    },
    moveY:function(){
      this.y+=this.yMove;
    },
    //getters
    getHealth:function(){
      return this.health;
    },
    getSpeed:function(){
      return this.speed;
    },
    //setters
    setHealth:function(health){
      this.health=health;
    },
    setSpeed:function(speed){
      this.speed=speed;
    }
  });
  //static variables
  creature.DEFAULT_CREATURE_WIDTH=DEFAULT_CREATURE_WIDTH;
  creature.DEFAULT_CREATURE_HEIGHT=DEFAULT_CREATURE_HEIGHT;
  creature.DEFAULT_SPEED=DEFAULT_SPEED;
  creature.DEFAULT_HEALTH=DEFAULT_HEALTH;

  return creature;
});
