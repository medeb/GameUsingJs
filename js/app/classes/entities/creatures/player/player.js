//all the movements of the player
define(["Creature","Assets"],function(Creature,Assets){

  var player = Creature.extend({
    init:function(handler,x,y){
      handler=this._super(handler,x,y,Creature.DEFAULT_CREATURE_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
      //^this means our player gonna take default width and height og our game
      this.assets=Assets.getAssets("player");
    },
    tick:function(dt){
      this.getInput(dt);
      this.move();//creature class's function
      this.handler.getGameCamera().centerOnEntity(this);
    },
    render:function(g){
      a = this.handler.getGameCamera().getxOffset();
      b = this.handler.getGameCamera().getyOffset();
      g.mydrawImage(this.assets.idle,this.x-a,this.y-b,this.assets.width,this.assets.height);

    },
    getInput:function(dt){
      this.xMove=0;this.yMove=0;
      if(this.handler.getKeyManager().up){
        this.yMove-=this.speed*dt;
      }
      if(this.handler.getKeyManager().down){
        this.yMove+=this.speed*dt;
      }
      if(this.handler.getKeyManager().left){
        this.xMove-=this.speed*dt;
      }
      if(this.handler.getKeyManager().right){
        this.xMove+=this.speed*dt;
      }
    }
    //^ in input we're gonna grab input from our handler & define what we want to do when keys are pressed!
  });
  return player;
});
