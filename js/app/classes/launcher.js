/*define(["Class"],function(Class){ //we're gonna take whatever class returns
 	var Launcher = Class.extend({ //take all the stuff from class.js
 		init:function(tittle){	//init.function is basically constructor call
 			document.title=tittle;
 		}
 	});
 	return Launcher;
});
*/
/*Diplay hieght width 500 300
define(["Class","Display"],function(Class,Display){
	var launcher = Class.extend({
		init:function(_title,_width,_height){
			var display = new Display(_title,_width,_height);

		}
	});
	return launcher;
});
*/
define(["Class","Game"],function(Class,Game){
	var launcher = Class.extend({
		init:function(_title,_width,_height){
			var game = new Game(_title,_width,_height);
			game.start();
		}
	});
	return launcher;
});