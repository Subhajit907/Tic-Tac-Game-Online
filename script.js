let currentPlayer = 'X';
let isGameActive = true;

function makeMove(cell) {
    if (!isGameActive || cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    if (checkWinner(currentPlayer)) {
        document.getElementById('message').textContent = `${currentPlayer} wins!`;
        isGameActive = false;
    } else if (checkTie()) {
        document.getElementById('message').textContent = 'It\'s a tie!';
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner(player) {
    const cells = document.querySelectorAll('.cell');
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent === player &&
            cells[b].textContent === player &&
            cells[c].textContent === player) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        if (cell.textContent === '') return false;
    }
    return true;
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
    document.getElementById('message').textContent = '';
    currentPlayer = 'X';
    isGameActive = true;
}
