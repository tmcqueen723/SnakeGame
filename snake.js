use2D = true;
initGame("canvas");

//const variables that don't change;
var tileSize = 16;
var sHead = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sHead.png");
var sBody = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sBody.png");
var sTail = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sTail.png");
var food = textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/food.png");
var cols = 10;
var rows = 10;
var tilesType = [];

function Grid(pic){
	this.pic = Textures.load(pic);
}

function Lvl(){
	Sprite.call(this);
	this.cols = cols;
	this.rows = rows;
	
	this.tileSize = tileSize;
	this.tile = new Sprite();
	
	this.tiles = [];
	for(var i = 0;i<cols;++i){
		this.tiles[i] = [];
		for(var j = 0;j<rows;++j){
			this.tiles[i][j] = new Grid(tileTypes[0]);
		}//second for loop
	}//first for loop
	
}
