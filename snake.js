use2D = true;

//const variables that don't change;
var tileSize = 10;
var w = 600;
var h = 600;
var go;

var Score;
var scoreText = new TextBox();
scoreText.x = 10;
scoreText.y = 10;
world.addChild(scoreText);

gInput.addBool(65, "left");
gInput.addBool(87, "up");
gInput.addBool(68, "right");
gInput.addBool(83, "down");
var snake = new List();
var sHead = new Sprite();
sHead.height = tileSize;
sHead.width = tileSize;
sHead.x = 300;
sHead.y = 200;
sHead.prevX = sHead.x;
sHead.prevY = sHead.y;
sHead.direction= "right";
sHead.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sHead.png");

var food = new Sprite();
food.height = tileSize;
food.width = tileSize;
food.x;
food.y;
food.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/food.png");
world.addChild(food);

var mine = new Sprite();
mine.height = tileSize;
mine.width = tileSize;
mine.x;
mine.y;
mine.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/Mine.png");

function makeSnake(){
	//makes the inital snake 
	sHead.x = 400;
	sHead.y = 300;
	sHead.PrevX = sHead.x;
	sHead.PrevY = sHead.y;
	sHead.direction= "right";
	food.x = (Math.floor(Math.random()*(w/tileSize)))*tileSize;
	food.y = (Math.floor(Math.random()*(w/tileSize)))*tileSize;
	var length = 3;
	snake.push(sHead);
	score = 0;
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
	//allows for the snake to move
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
	//if you hit a wall Game Over
	if (sHead.x == w || sHead.x == 0 || sHead.y >= h || sHead.y <= 0){
		clearInterval(go);
		var gameO = new Sprite();
		gameO.width = 600;
		gameO.height = 600;
		gameO.x = 0;
		gameO.y = 0;
		gameO.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/GameOver.png");
		world.addChild(gameO);		
	}
	//add to the snake when he "eats" food and add
	//a new food to the world, as well as a mine
	if (sHead.x == food.x && sHead.y == food.y){
		var nsnake = new Sprite();
		nsnake.height = tileSize;
		nsnake.width = tileSize;
		switch (sHead.direction){
			case "left":
				nsnake.x = (snake.getAt(snake.length-1).x + (tileSize+2));
				nsnake.y = (snake.getAt(snake.length-1).y);
			case "right":
				nsnake.x = (snake.getAt(snake.length-1).x - (tileSize+2));
				nsnake.y = (snake.getAt(snake.length-1).y);
			case "up":
				nsnake.x = (snake.getAt(snake.length-1).x);
				nsnake.y = (snake.getAt(snake.length-1).y + (tileSize+2));
			case "down":
				nsnake.x = (snake.getAt(snake.length-1).x);
				nsnake.y = (snake.getAt(snake.length-1).y +(tileSize-2));
		}
		nsnake.prevX = nsnake.x;
		nsnake.prevY = nsnake.y;
		nsnake.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/sBody.png");
		snake.push_back(nsnake);
		world.addChild(snake.getAt(snake.length-1));
		food.x = (Math.floor(Math.random()*(w/tileSize)))*tileSize;
		food.y = (Math.floor(Math.random()*(w/tileSize)))*tileSize;
		world.addChild(mine);
		mine.x = (Math.floor(Math.random()*(w/tileSize)))*tileSize;
		mine.y = (Math.floor(Math.random()*(w/tileSize)))*tileSize; 
		score++;
	}
	
	
	//end the game if the snake collides with a mine
	if (sHead.x == mine.x && sHead.y == mine.y){
		clearInterval(go);
		var gameO = new Sprite();
		gameO.width = 600;
		gameO.height = 600;
		gameO.x = 0;
		gameO.y = 0;
		gameO.image = Textures.load("http://people.ucsc.edu/~tmcqueen/Sprites/GameOver.png");
		world.addChild(gameO);
	}
	
	//changes the direction of the snake based on input
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
	scoreText.text = "Score: "+ score;
}
makeSnake();




