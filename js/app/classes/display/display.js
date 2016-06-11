define(["Jquery","Class"],function($,Class){
	//private variables
	var canvas,title,width,graphics,height;
	var display = Class.extend({
		init:function(_title,_width,_height){
			title=_title;
			width=_width;
			height=_height;
			createDisplay(); //create a function
		},
		//prototype can be declare like this also inside the constructor
		getTitle:function(){
				return title;
		},
		getWidth:function(){
			return width;
		},
		getHeight:function(){
			return height;
		},
		getGraphics:function(){
			return graphics;
		}
	});
	//private method
	function createDisplay(){
		document.title=title;
		var body= document.body;
		body.innerHTML=("<canvas id = 'canvas' width ='"+width+"' height='"+height+"'></canvas> ");
		graphics=document.getElementById('canvas').getContext('2d');
		//graphics is everything we're gonna attach under canvas field.
	};
	//getters
/*	
	display.prototype.getTitle=function(){
		return title;
	};
	display.prototype.getWidth = function(){ //prototype provides some predefined functions
		return width;
	};
	display.prototype.getHeight=function(){
		return height;
	};
	display.prototype.getGraphics = function(){
		return graphics;
	};
*/
	CanvasRenderingContext2D.prototype.mydrawImage = function(asset,_x,_y,_width,_height){
  	this.drawImage(asset.sheet,asset.x,asset.y,asset.width,asset.height,_x,_y,_width,_height);
	}//^ g.mydrawImage()
	return display;
});
