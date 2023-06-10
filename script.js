/*----- constants -----*/
const MARK = {
    '1' : 'X',
    '2': 'O',
    '0': null
}

/*----- state variables -----*/
let board; //array of 3 column arrays
let turn; // x or o
let winner; //null, o or x winner, 'T' = tie

/*----- cached elements  -----*/
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    turn = 1;
    winner = null;
    render();
}

function render() {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
       colArr.forEach(function(cellVal, rowIdx) {
        const cellId = `c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        cellEl.innerHTML = MARK[cellVal]
        //styles for MARK
        cellEl.style.fontSize = '19vmin';
        cellEl.style.color = 'orchid';
        cellEl.style.display = 'flex';
        cellEl.style.justifyContent = 'center';
        cellEl.style.alignItems = 'center'; 
       }) 
    });
}

function renderMessage() {
    
}

function renderControls() {

}