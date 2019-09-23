import BoardRectangle from "../pieces/boardRectangle";
import Board from '../pieces/board';

test('a piece can be inserted', () => {
  const board = new Board();
  const boardPiece = new BoardRectangle(0,0,0,0);
  boardPiece.type = 'circle';
  board.insertPiece(boardPiece);
  expect(board.board[0][0]).toBe(boardPiece);
});
