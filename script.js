/*----- constants -----*/

const MARK = {
    '1' : 'X',
    '2': 'O',
    '0': null
}

const COLOR = {
    '1' : 'red',
    '2' : 'blue',
    '0' : null
}

/*----- state variables -----*/
let board; 
//array of 3 column arrays
let turn; // x or o
let winner; //null, o or x winner, 'T' = tie

/*----- cached elements  -----*/
const msgEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleDrop);

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

function handleDrop(evt) {
    const colIdx = board.indexOf(evt.target);
    console.log(colIdx);
    //evt.target getElementById

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
        //styles for MARK
        cellEl.innerHTML = MARK[cellVal]
        cellEl.style.color = COLOR[cellVal]
        cellEl.style.fontSize = '19vmin';
        cellEl.style.display = 'flex';
        cellEl.style.justifyContent = 'center';
        cellEl.style.alignItems = 'center'; 
       }) 
    });
}

function renderMessage() {
    if (winner === 'T') {
        msgEl.innerText = 'Tie Game!'
    } else if (winner) {
        msgEl.innerHTML = `<span style="color: ${COLOR[winner]}">${MARK[winner]}</span> Wins!`;
    } else {
        msgEl.innerHTML = `<span style="color: ${COLOR[turn]}">${MARK[turn]}</span>'s Turn`;
    }
}

function renderControls() {
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
}

