let playerText = document.getElementById('playerText');
let computerText = document.getElementById('computerText');
let resultText = document.getElementById('resultText');

let gameButtons = document.querySelectorAll('.gameButton');

let player;
let computer;


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
                return player == 'PAPER' ? "YOU WIN !" : "YOU LOSE !";
                
            case 'PAPER':
                return player == 'SCISSORS' ?  "YOU WIN !" : "YOU LOSE !";
        
            case 'SCISSORS':
                return player == 'ROCK' ?  "YOU WIN !" : "YOU LOSE !";
            
        }
        
    }
})
