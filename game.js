import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);

    // If there is a bomb at the flipped location, tell player they lost
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game over! Here was the final board: ');
      this._board.print();
    }
    // If there is not a bomb at the flipped location, and game is not over, tell player they won
    else if (this._board.hasNonBombEmptySpaces()) {
      console.log('Current Board: ');
      this._board.print();
    }
    // If there is not a bomb at the flipped location, and game is over, tell player current board
    else {
      console.log('Congratulations on winning! Here was your winning board: ');
      this._board.print();
    }
  }
}
