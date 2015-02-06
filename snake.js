use2D = true;
initGame("canvas");

//const variables that don't change;
var tileSize = 16;

var sHead =  new Sprite();
sHead.height = tileSize;
sHead.width = tileSize;
sHead.texture = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sHead.png");

var sBody = new Sprite();
sBody.height = tileSize;
sBody.width = tileSize;
sBody.texture = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sBody.png");

var sTail = new Sprite();
sTail.height = tileSize;
sTail.width = tileSize;
sTail.texture =  Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sTail.png");

var food = new Sprite();
food.height = tileSize;
food.width = tileSize;
food.texture = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/food.png");

var Grid = new Sprite();
Grid.heigth = tileSize;
Grid.width = tileSize;
Grid.texture = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/Grid.png");

function makeSnake(){
	var startLength = 3;
	var snake = new List();
	snake.push(sTail);
	snake.push(sBody);
	snake.push(sHead);
}

var makeGrid = new CollisionGrid(x,y,wide,high,col,rows);

world.addChild(makeGrid);
/*var tilesType = [];
tileType.push("http://people.ucsc.edu/~tmcqueen/Sprites/Grid.png");

function Grid(texture){
	this.texture = Textures.load(texture);
	
}

//got this from the grid example with Brine
//it should create the level
function Lvl(cols,rows,tileSize){
	Sprite.call(this);
	this.image = Textures.load(tileType[0]);
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

Lvl.prototype = new Sprite();

Lvl.prototype.update = function(d){
	this.updateChildren(d);
}*/
