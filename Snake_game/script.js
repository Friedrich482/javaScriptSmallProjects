let gameBoard = document.getElementById('gameBoard');
let context = gameBoard.getContext("2d")
let scoreText = document.getElementById('scoreText');
let restartButton = document.getElementById('restartButton');
let gameWidth = gameBoard.width;
let gameHeight = gameBoard.height;

let gameBackground = 'white'
let snakeColor = 'lightgreen';
let snakeBorder = 'black'
let foodColor = 'red';
let unitSize = 25;
let running  = false;
let xVelocity = unitSize;
let yVelocity = 0
let foodX;
let foodY;
let score = 0;
let snake = [
    {x : unitSize * 4, y : 0},
    {x : unitSize * 3, y : 0},
    {x : unitSize * 2, y : 0},
    {x : unitSize, y : 0},
    {x : 0, y : 0}
]

window.addEventListener('keydown', changeDirection);
restartButton.addEventListener('click', resetGame);

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    nextTick();
}

function nextTick(){
    if(running){
        setTimeout(() =>{
            clearBoard();
            drawFood();
            moveSnake()
            drawSnake();
            checkGameOver();
            nextTick();
        }, 100)
    }
    else{
        displayGameOver()
    }
}
function clearBoard(){
    context.fillStyle = gameBackground;
    context.fillRect(0, 0, gameWidth, gameHeight) 
}

function createFood(){
    function randomFood(min, max){
        const randNum = Math.round(Math.random() * ((max - min) + min) / unitSize) * unitSize;
        return randNum
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameHeight - unitSize);
}

function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize)
}

function moveSnake(){
    const head = {x : snake[0].x + xVelocity, 
                  y : snake[0]. y + yVelocity};
    snake.unshift(head);

    if(snake[0].x == foodX && snake[0].y == foodY){
        score ++;
        scoreText.textContent = score;
        createFood();
    }
    else{
        snake.pop();
    }

}

function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart =>{
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
}
function changeDirection(event){
    const keyPressed = event.keyCode;
    let LEFT = 37;
    let UP = 38;
    let RIGHT = 39;
    let DOWN = 40;

    let MovingUp = (yVelocity == - unitSize);
    let MovingDown = (yVelocity == unitSize);
    let MovingRight = (xVelocity == unitSize);
    let MovingLeft = (xVelocity == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !MovingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == RIGHT && !MovingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !MovingDown):
            xVelocity = 0
            yVelocity = -unitSize;
            break;
        case(keyPressed == DOWN && !MovingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
}
}
function checkGameOver(){
    switch(true){
        case(snake[0].x < 0):
            running = false;
        case(snake[0].x >= gameWidth):
                running = false;
        case(snake[0].y < 0):
            running = false;
        case(snake[0].y >= gameHeight):
            running = false;
    }
    for(let i = 1; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
}

function displayGameOver(){
    context.font = "40px Permanent Marker";
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText("GAME OVER", gameWidth / 2, gameHeight / 2);
    running = false;
}

function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x : unitSize * 4, y : 0},
        {x : unitSize * 3, y : 0},
        {x : unitSize * 2, y : 0},
        {x : unitSize, y : 0},
        {x : 0, y : 0}
    ]
    gameStart()
}