/*----- constants -----*/
//Display of background color for the selected box. Player 1 is 1, pink and X. Player 2 is -1, green and O
const COLORS = {
    '0': 'white',
    '1': 'pink',
    '-1': 'lightgreen'
};

//Display for selected box. X or O
const MARK = {
    '0': '',
    '1': 'X',
    '-1': 'O'
};

//Winning combos to win the math
const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

/*----- state variables -----*/
let board; //array of 9 boxes
let turn; // 1 or -1
let winner; //null = no winner; 1 or -1 winner; 'T' = Tie

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
        squareEl.style.fontSize = '18vmin';
        squareEl.style.color = 'darkslategrey';
    });
}

//Display whose turn it is and the winner
function renderMessage() {
    if (winner === 'T') {
        message.innerHTML = 'Tie Game! Game Over!';
    } else if (winner) {
        message.innerHTML = `Player <span style="color: ${COLORS[turn]}">${MARK[turn]}</span> Wins!`;
    } else {
        message.innerHTML = `Player <span style="color: ${COLORS[turn]}">${MARK[turn]}</span>'s Turn`;
    }
}

//Get index of the clicked box
function handleClick(event) {
    const boxIdx = parseInt(event.target.id.replace('box-', ''));
    //if statement in case someone clicks outside box, the box is filled or there is a winner
    if ( isNaN(boxIdx) || board[boxIdx] || winner )
        return;
    //update state of board with the current turn value
    board[boxIdx] = turn;
    //switch player turn
    turn *= -1;
    // check for a winner
    winner = getWinner();
    render();
}   

//Check for a winner in the state. 1(X) or -1(O), 'T' for Tie, null for no winner yet
//Got really stuck on this section. Had to peak at the solution and research Math.abs function
function getWinner() {
    for (let i = 0; i < COMBOS.length; i++) {
        if (Math.abs(board[COMBOS[i][0]] + board[COMBOS[i][1]] + board[COMBOS[i][2]]) === 3) {
            return board[COMBOS[i][0]];
        } else if (board.includes(null)) {
            return null;
        }
    }
    //return 'T'; 
    //I attempted to implement some tie logic if there is no winner but got totally stuck.
    //When I impliment returning the 'T' the game ends after just one move. I don't understand why it is bi-passing the loop. 
    //When I put the statement inside the loop, it also doesn't work.
}
