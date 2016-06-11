//app.js is basically defines all the files alias name
requirejs.config({
	"basUrl":"js", //from where it's gonna load
	"paths":{
		//libs
		"Class":"libs/class",
		"Jquery":"libs/jquery",

		//classes
		"Launcher":"app/classes/launcher",
		"Display":"app/classes/display/display",
		"Game":"app/classes/game",
		"ImageLoader":"app/classes/gfx/imageLoader",
		"SpriteSheet":"app/classes/gfx/spritesheet",
		"Assets":"app/classes/gfx/assets",
		"State":"app/classes/states/states",
		"GameState":"app/classes/states/gameState",
		"Handler":"app/classes/Handler/handler",
		"KeyManager":"app/classes/input/keyManager",
		"Entity":"app/classes/entities/entity",
		"Creature":"app/classes/entities/creatures/creatures",
		"Player":"app/classes/entities/creatures/player/player",
		"Tile":"app/classes/tile/tile",
		"GrassTile":"app/classes/tile/grassTile",
		"DirtTile":"app/classes/tile/dirtTile",
		"StoneTile":"app/classes/tile/stoneTile",
		"TileLoader":"app/classes/tile/tileLoader",
		"World":"app/classes/world/world",
		"Utils":"app/classes/utils/utils",
		"GameCamera":"app/classes/gfx/gamecamera"

	}
});

require(["app/main"]);
