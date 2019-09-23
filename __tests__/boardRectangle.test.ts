import BoardRectangle from "../pieces/boardRectangle";

test('type can be set', () => {
  const BoardPiece = new BoardRectangle(0,0,0,0);
  const pieceType = 'circle';
  BoardPiece.type = pieceType;
  expect(BoardPiece.type).toBe(pieceType);
});
