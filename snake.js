use2D = true;

//const variables that don't change;
var tileSize = 16;
var w = 800;
var h = 600;
var go;

gInput.addBool(65, "left");
gInput.addBool(87, "up");
gInput.addBool(68, "right");
gInput.addBool(83, "down");
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
	var length = 3;
	snake.push(sHead);
	for (var i = 1; i<length;i++){
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
	for (var j=0; j<snake.length; j++){
		world.addChild(snake.getAt(j));
	}
	go = setInterval(updateGame, 60);
}

function updateS(){
	for (var i = 1; i<snake.length; i++){
		snake.getAt(i).prevX = snake.getAt(i).x;
		snake.getAt(i).prevY = snake.getAt(i).y;
		switch(sHead.direction){
			case "left":
				snake.getAt(i).x = (snake.getAt(i-1).prevX+2);
				snake.getAt(i).y = (snake.getAt(i-1).prevY);
				break;
			case "up":
				snake.getAt(i).x = (snake.getAt(i-1).prevX);
				snake.getAt(i).y = (snake.getAt(i-1).prevY+2);
				break;
			case "right":
				snake.getAt(i).x = (snake.getAt(i-1).prevX-2);
				snake.getAt(i).y = (snake.getAt(i-1).prevY);
				break;
			case "down":
				snake.getAt(i).x = (snake.getAt(i-1).prevX);
				snake.getAt(i).y = (snake.getAt(i-1).prevY-2);
				break;
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
	if (gInput.down && (sHead.direction != "up")){
		sHead.direction = "down";
	}
	sHead.prevX = sHead.x;
	sHead.prevY = sHead.y;
	switch(sHead.direction){
		case "left":
			sHead.x -= tileSize;
			break;
		case "up":
			sHead.y -= tileSize;
			break;
		case "right":
			sHead.x += tileSize;
			break;
		case "down":	
			sHead.y += tileSize;
			break;
	}
	updateS();
}
makeSnake();




