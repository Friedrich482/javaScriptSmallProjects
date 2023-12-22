let cells = document.querySelectorAll('.cell');
let restartButton = document.getElementById('restartButton');
let displayStatus = document.getElementById('displayStatus');

let running = false;
let currentPlayer = "X";
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let actualCellsContent = ["", "", "", "", "", "", "", "", ""];

initializeGame();

function initializeGame(){
    running = true;
    cells.forEach(cell =>{cell.addEventListener('click', cellClicked)});
    restartButton.addEventListener('click', restartGame);
    displayStatus.textContent = `${currentPlayer}'s turn`
}

function cellClicked(){
    let cellIndex = this.getAttribute('cellIndex');

    if(actualCellsContent[cellIndex] != "" || !running){
        return; 
    }
    
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    actualCellsContent[index] = currentPlayer;
    cell.textContent = `${currentPlayer}`;
    if(currentPlayer == "X"){
        cell.style.backgroundColor = 'hsl(229, 83%, 65%)'
    }
    else{
        cell.style.backgroundColor = 'hsla(0, 83%, 51%, 0.642)'
    }
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winConditions.length; i++){
        let cellA = actualCellsContent[winConditions[i][0]];
        let cellB = actualCellsContent[winConditions[i][1]];
        let cellC = actualCellsContent[winConditions[i][2]];
        
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            running = false;
            break;
        }
        
    }
    if(roundWon){
        displayStatus.textContent = `${currentPlayer} wins !`
        running = false;
    }

    else if(!actualCellsContent.includes("")){
        displayStatus.textContent = ` DRAW !`
    }
    else{
        changePlayer();
    }
}

function changePlayer(){
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    displayStatus.textContent = `${currentPlayer}'s turn `
}

function restartGame(){
    currentPlayer = "X";
    actualCellsContent = ["", "", "", "", "", "", "", "", ""];
    displayStatus.textContent = `${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = 'transparent';
    });

    running = true;
}