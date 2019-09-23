import Board from '../pieces/board';
import boardRectangle from "../pieces/boardRectangle.ts";

export default class computerPlayer {
  pieceType: string;
  board: Board;

  constructor(pieceType: string, board: Board) {
    this.pieceType = pieceType;
    this.board = board;
  }

  makeMove(): boardRectangle  {
    const possibleSquares = this.checkBoardState(this.board);
    const position = this.pickRandomPosition(possibleSquares);
    const freshPiece = new boardRectangle(0, 0, position[0], position[1]);
    freshPiece.type = this.pieceType;
    return freshPiece;
  }

  private checkBoardState(board: Board): Array<Array<any>> {
    let returnArray: Array<any> = [];
    for (var i = 0; i < board.board.length; i++) {
      for (var f = 0; f < board.board[i].length; f++) {
        if (board.board[i][f] === null) {
          returnArray.push([i, f])
        }
      }
    }
    return returnArray;
  }

  private pickRandomPosition(possibleSquares: Array<Array<any>>): Array<any> {
    return possibleSquares[Math.floor(Math.random() * possibleSquares.length)];
  }
}
