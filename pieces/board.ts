import boardRectangle from "./boardRectangle";

export default class Board {
  board: Array<Array<boardRectangle | null>>;
  winner: string | null;

  constructor() {
    this.board = [[null, null, null], [null, null, null], [null, null, null]];
    this.winner = null;
  }

  // TODO: use boardRectangle type
  // TODO: change to factory
  insertPiece(piece: any): void {
    this.board[piece.xPosition][piece.yPosition] = piece;
  };
}
