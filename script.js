/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'pink',
    '-1': 'lightgreen'
};

const MARK = {
    '0': '',
    '1': 'X',
    '-1': 'O'
}

/*----- state variables -----*/
let board; //array of 9 boxes
let turn; // 1 or -1
let winner; //null = no winner; 1 or -1 winner; 'T'

/*----- cached elements  -----*/
const message = document.querySelector('h1');

/*----- event listeners -----*/


/*----- functions -----*/
init();
//Initializes state and calls render()
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = null;
    render();
}

//Visualizes all state in the DOM
function render() {
    renderBoard();
    renderMessage();
}

function renderBoard() {
    //Iterate over the squares in the board
    board.forEach(function(boardArr, boardIdx) {
        const squareId = `box-${boardIdx}`;
        const squareEl = document.getElementById(squareId);
        //styles for player selection
        squareEl.style.backgroundColor = COLORS[boardArr];
        squareEl.innerHTML = MARK[boardArr];
        squareEl.style.display = 'flex';
        squareEl.style.justifyContent = 'center';
        squareEl.style.alignItems = 'center';
        squareEl.style.fontSize = '19vmin';
    });
}

function renderMessage() {
    if (winner === 'T') {
        message.innerHTML = 'Tie Game!';
    } else if (winner) {
        message.innerHTML = `Player ${MARK[winner]} Wins!`;
    } else {
        message.innerHTML = `Player ${MARK[turn]}'s Turn`;
    }
}