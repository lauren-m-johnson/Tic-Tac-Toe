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
const resetButton = document.querySelector('button');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick);
resetButton.addEventListener('click', init);

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

//Iterate over the squares in the board
function renderBoard() {
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

//Displays whose turn it is and the winner
function renderMessage() {
    if (winner === 'T') {
        message.innerHTML = 'Tie Game!';
    } else if (winner) {
        message.innerHTML = `Player ${MARK[winner]} Wins!`;
    } else {
        message.innerHTML = `Player ${MARK[turn]}'s Turn`;
    }
}

function handleClick(event) {
    //gets index of the clicked box
    const boxIdx = parseInt(event.target.id.replace('box-', ''));
    //if statement in case someone clicks outside box, the box is filled or there is a winner
    if ( isNaN(boxIdx) || board[boxIdx] || winner )
        return;
    //update state of board with the current turn value
    board[boxIdx] = turn;
    //switch player turn
    turn *= -1;
    // check for a winner
    winner = displayWinner();
    render();
}   

function displayWinner() {

}