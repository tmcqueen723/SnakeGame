use2D = true;

//const variables that don't change;
var tileSize = 16;
var w = 800;
var h = 600;
var go;

gInput.addBool(37, "left");
gInput.addBool(38, "up");
gInput.addBool(39, "right");
gInput.addBool(40, "down");
var snake = new List();
var sHead = new Sprite();
sHead.height = tileSize;
sHead.width = tileSize;
sHead.x = 400;
sHead.y = 300;
sHead.prevX = sHead.x;
sHead.prevY = sHead.y;
sHead.direction= "right";
sHead.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sHead.png");

function makeSnake(){
	sHead.x = 400;
	sHead.y = 300;
	sHead.PrevX = sHead.x;
	sHead.PrevY = sHead.y;
	sHead.direction= "right";
	var startLength = 3;
	snake.push(sHead);
	for (var i = 1; i<startLength;i++){
		var sBody = new Sprite();
		sBody.height = tileSize;
		sBody.width = tileSize;
		sBody.x = (snake.getAt(i-1).x - (tileSize+2));
		sBody.y = (snake.getAt(i-1).y);
		sBody.prevX = sBody.x;
		sBody.prevY = sBody.y;
		sBody.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sBody.png");
		snake.push(sBody);
	}
	for (var j = 0; j < snake.startLength; j++){
		world.addChild(snake.getAt(j));
	}
}

function updateS(){
	for (var i = 1; i<snake.length; i++){
		snake.getAt(i).prevX = sList.getAt(i).x;
		snake.getAt(i).prevY = sList.getAt(i).y;
		if (sHead.direction = "left"){
			sList.getAt(i).x = (sList.getAt(i-1).prevX+2);
			sList.getAt(i).y = (sList.getAt(i-1).prevY);
		}else if (sHead.direction = "up"){
			sList.getAt(i).x = (sList.getAt(i-1).prevX);
			sList.getAt(i).y = (sList.getAt(i-1).prevY+2);
		}else if (sHead.direction = "right"){
			sList.getAt(i).x = (sList.getAt(i-1).prevX-2);
			sList.getAt(i).y = (sList.getAt(i-1).prevY);
		}else if (sHead.direction = "down"){
			sList.getAt(i).x = (sList.getAt(i-1).prevX);
			sList.getAt(i).y = (sList.getAt(i-1).prevY-2);
		}
	}
}


function updateGame(){
	if (gInput.left && (sHead.direction != "right")){
		sHead.direction = "left";
	}
	if (gInput.up && (sHead.direction != "down")){
		sHead.direction = "up";
	}
	if (gInput.right && (sHead.direction != "left")){
		sHead.direction = "right";
	}
	if (gInput.right && (sHead.direction != "up")){
		sHead.direction = "down";
	}
	sHead.prevX = sHead.x;
	sHead.prevY = sHead.y;
	if (sHead.direction = "left"){
		sHead.x -= tileSize;
	}
	if (sHead.direction = "up"){
		sHead.y -= tileSize;
	}
	if (sHead.direction = "right"){
		sHead.x += tileSize;
	}
	if (sHead.direction = "down"){
		sHead.y += tileSize;
	}
	updateS();
}
makeSnake();




