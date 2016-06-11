define(["Class"],function (Class) {
  var currentState= null;
  var state = Class.extend({
    init:function(handler){
      this.handler=handler;
    },
    tick:function(dt){
    },
    render:function(g){
    }

  });
  
  state.getState=function(){
    return currentState;
  }
  
  state.setState=function(state) {
    currentState=state;
  }
return state;
});
