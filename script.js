/*----- constants -----*/
const MARK = {
    'x' : 'X',
    'o' : 'O'
}

/*----- state variables -----*/
let board; //array of 3 column arrays
let turn; // x or o
let winner; //null, o or x winner, 'T' = tie

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    turn = 'x';
    winner = null;
    render();
}

function render() {
    
}