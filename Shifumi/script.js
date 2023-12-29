let playerText = document.getElementById('playerText');
let computerText = document.getElementById('computerText');
let resultText = document.getElementById('resultText');

let gameButtons = document.querySelectorAll('.gameButton');

let player;
let computer;
let playerImg = document.getElementById('playerImg')
let computerImg = document.getElementById('computerImg');
gameButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        
        player = button.textContent;
        playerText.textContent = `Player : ${player}`
        computerPlays();
        resultText.textContent = `Result : ${checkWinner()}`;
    })

    function computerPlays(){
        let randNum = Math.floor(Math.random() * 3) + 1;
        computer = gameButtons[randNum - 1].textContent
        computerText.textContent = `Computer : ${computer}`

    }
    
    function checkWinner(){
        if(computer == player){
            return "DRAW !"
        }

        switch(computer){
            case 'ROCK':
                displayImgs();
                return player == 'PAPER' ? "YOU WIN !" : "YOU LOSE !";
                
            case 'PAPER':
                displayImgs();
                return player == 'SCISSORS' ?  "YOU WIN !" : "YOU LOSE !";
        
            case 'SCISSORS':
                displayImgs();
                return player == 'ROCK' ?  "YOU WIN !" : "YOU LOSE !";
            
        }
        
    }
    
    function displayImgs(){
        //Display for the player 
        if(player == 'PAPER'){
            playerImg.src = 'paper.jpg';
            playerImg.style.display = 'inline-block';
        }
        else if(player == 'ROCK'){
            playerImg.src = 'rock.jpg';
            playerImg.style.display = 'inline-block';
        }
        else{
            playerImg.src = 'scissors.jpg'
            playerImg.style.display = 'inline-block';
        }
        
        //Display for the computer

        if(computer == 'PAPER'){
            computerImg.src = 'paper.jpg';
            computerImg.style.display = 'inline-block';
        }
        else if(computer == 'ROCK'){
            computerImg.src = 'rock.jpg'
            computerImg.style.display = 'inline-block';
        }
        else{
            computerImg.src = 'scissors.jpg'
            computerImg.style.display = 'inline-block';
        }
    }
})
