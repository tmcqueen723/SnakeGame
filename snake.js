use2D = true;

//const variables that don't change;
var tileSize = 16;

var sHead = new Sprite();
sHead.height = tileSize;
sHead.width = tileSize;
sHead.x = 48;
sHead.y = 0;
sHead.PrevX = sHead.x;
sHead.PrevY = sHead.y;
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
	world.addChild(sHead);
	snake.push(sTail);
	snake.push(sBody);
	snake.push(sHead);
}


var tileType = [];
tileType.push("http://people.ucsc.edu/~tmcqueen/Sprites/Grid.png");

function Tile(texture){
	this.texture = Textures.load(texture);
	
}

/*//got this from the grid example with Brine
//it should create the level
function Level(cols,rows,tileSize){
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
			this.tiles[i][j] = new Tile(tileType[0]);
		}//second for loop
	}//first for loop
	    this.camera = new Camera(0, 0, tileSize, canvas.width, canvas.height, this);
}

Level.prototype = new Sprite();

Level.prototype.update = function(d){
	this.x = -this.camera.x;
	this.y = -this.camera.y;
	this.updateChildren(d);
}

Level.prototype.draw = function(ctx){
	Sprite.prototype.draw.call(this, ctx);
	
	var camera = this.camera,
		minTileX = Math.max(0, Math.floor(camera.x/this.tileSize)),
		minTileY = Math.max(0, Math.floor(camera.y/this.tileSize)),
        maxTileX = Math.min(this.cols, Math.ceil((camera.x+camera.viewWidth)/this.tileSize)),
		maxTileY = Math.min(this.rows, Math.ceil((camera.y+camera.viewHeight)/this.tileSize));
		
	var tile = this.tile;
	for (var i = minTileX; i<maxTileX; i++){
		for (var j = minTileY; j<maxTileY; j++){
			tile.x = i*this.tileSize;
			tile.y = j*this.tileSize;
			tile.image = this.tiles[i][j].texture;
			tile.width = this.tileSize;
			tile.height = this.tileSize;
			
			tile.transform(ctx);
			tile.draw(ctx);
			tile.unTransform(ctx);
		}
	}
	this.drawChildren(ctx);
}

var lvl = new Level(10,10,16);
world.addChild(lvl);*/













