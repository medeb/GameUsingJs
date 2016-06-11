//this is for moving your character using keys
define(["Class"],function(Class){
  var keys = [];//list of keys keys = ["87":true/false] onkeydown function
  var keyManager = Class.extend({
    init:function(){

    }
  });
  keyManager.prototype.tick = function(){
    //keycode for w,a,s,d

    this.up = keys[87];
    this.down=keys[83];
    this.left=keys[65];
    this.right=keys[68];
  }
  //when user press the key
  window.onkeydown = function(e) {
    keys[e.keyCode]=true;
  }
  //when user release the key
  window.onkeyup = function(e) {
    keys[e.keyCode]=false;
  }
  return keyManager;
});
