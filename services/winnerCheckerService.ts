import Board from '../pieces/board';
import boardRectangle from "../pieces/boardRectangle";

export default class WinnerCheckerService {
  board: Board;
  winner: string;

  constructor(board: Board) {
    this.board = board;
    this.winner = '';
  }

  checkForWinner(): boolean {
    let returnValue = false;
    this.board.board.forEach((row) => {
      if(this.checkRow(row)) {
        returnValue = true;
      };
    });
    if(this.checkDiagonal()) {
      returnValue = true;
    }
    return returnValue;
  }

  private checkRow(row: Array<boardRectangle | null>): boolean {
    const mappedRow = row.map((element) => {
      if (element === null) {
        return '';
      } else {
        return element.type;
      }
    });
    if(mappedRow[0] === 'circle' && mappedRow[1] === 'circle' && mappedRow[2] === 'circle') {
      this.winner = 'circle';
      return true;
    } else if (mappedRow[0] === 'cross' && mappedRow[1] === 'cross' && mappedRow[2] === 'cross') {
      this.winner = 'cross';
      return true;
    }
    if(this.checkColumn()) {
      return true;
    }
    return false;
  }

  private checkColumn(): boolean {
    for(let i = 0; i < 3; i++) {
      if(this.board.board[0][i] === null || this.board.board[1][i] === null || this.board.board[2][i] === null) {
        continue;
      }
      if(this.board.board[0][i].type === 'circle' && this.board.board[1][i].type === 'circle' && this.board.board[2][i].type === 'circle') {
        this.winner = 'circle';
        return true;
      } else if (this.board.board[0][i].type === 'cross' && this.board.board[1][i].type === 'cross' && this.board.board[2][i].type === 'cross') {
        this.winner = 'cross';
        return true;
      }
    }
    return false;
  }

  private checkDiagonal(): boolean{
    // TODO: do something about hard coding
    if (this.board.board[0][0] !== null && this.board.board[1][1] !== null && this.board.board[2][2] !== null) {
      if (this.board.board[0][0].type === 'cross' && this.board.board[1][1].type === 'cross' && this.board.board[2][2].type === 'cross') {
        this.winner = 'cross';
        return true;
      } else if (this.board.board[0][0].type == 'circle' && this.board.board[1][1].type == 'circle' && this.board.board[2][2].type == 'circle') {
        this.winner = 'circle';
        return true
      }
      return false;
    }
    if (this.board.board[2][0] !== null && this.board.board[1][1] !== null && this.board.board[0][2] !== null) {
      if (this.board.board[2][0].type == 'cross' && this.board.board[1][1].type == 'cross' && this.board.board[0][2].type == 'cross') {
        this.winner = 'cross';
        return true;
      } else if (this.board.board[2][0].type == 'circle' && this.board.board[1][1].type == 'circle' && this.board.board[0][2].type == 'circle') {
        this.winner = 'circle';
        return true
      }
      return false;
    }
    if (this.board.board[0][2] !== null && this.board.board[1][1] !== null && this.board.board[2][0] !== null) {
      if (this.board.board[0][2].type == 'cross' && this.board.board[1][1].type == 'cross' && this.board.board[2][0].type == 'cross') {
        this.winner = 'cross';
        return true;
      } else if (this.board.board[0][2].type == 'circle' && this.board.board[1][1].type == 'circle' && this.board.board[2][2].type == 'circle') {
        this.winner = 'circle';
        return true
      }
      return false;
    }
    if (this.board.board[2][2] !== null && this.board.board[1][1] !== null && this.board.board[0][0] !== null) {
      if (this.board.board[2][2].type == 'cross' && this.board.board[1][1].type == 'cross' && this.board.board[0][0].type == 'cross') {
        this.winner = 'cross';
        return true;
      } else if (this.board.board[2][2].type == 'circle' && this.board.board[1][1].type == 'circle' && this.board.board[0][0].type == 'circle') {
        this.winner = 'circle';
        return true
      }
      return false;
    }
    return false;
  }
}
