define(["State","Player","World"],function (State,Player,World) {
  var x=0;
  var y=0;
  var gameState = State.extend({
    init:function(handler){
      this._super(handler);
      this.player = new Player(handler,20,20);
      this.world = new World("/games/res/world.wrd",handler);
    },
    tick:function(dt){
      this.world.tick(dt);
      this.player.tick(dt);
    },
    render:function(g){
      this.world.render(g);
      this.player.render(g);
    }
  });
return gameState;
});
