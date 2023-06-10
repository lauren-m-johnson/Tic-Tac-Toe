/*----- constants -----*/


/*----- state variables -----*/
let board; //array of 9 boxes
let turn; // 1 or -1
let winner; //null = no winner; 1 or -1 winner; 'T'

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();
//Initializes state and calls render()
function init() {
    board = [null, null, null, null, null, null, null, null, null];
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
        
        
        console.log(boardIdx, boardArr);
    });
}

function renderMessage() {

}