import WinnerCheckerService from '../services/winnerCheckerService';
import Board from "../pieces/board";
import BoardRectangle from "../pieces/boardRectangle";

test('no winner for neutral board', () => {
  const board = new Board();
  const crossPiece1 = new BoardRectangle(0,0,0,0);
  const crossPiece2 = new BoardRectangle(0,0,1,0);
  const circlePiece1 = new BoardRectangle(0,0,2,0);
  const circlePiece2 = new BoardRectangle(0,0,0,2);
  crossPiece1.type = 'cross';
  crossPiece2.type = 'cross';
  circlePiece1.type = 'circle';
  circlePiece2.type = 'circle';
  board.insertPiece(crossPiece1);
  board.insertPiece(crossPiece2);
  board.insertPiece(circlePiece1);
  board.insertPiece(circlePiece2);
  const winnerChecker = new WinnerCheckerService(board);
  expect(winnerChecker.checkForWinner()).toBe(false);
  expect(winnerChecker.winner).toBe('');
});

test('cross is winner horizontal', () => {
  const board = new Board();
  const crossPiece1 = new BoardRectangle(0,0,0,0);
  const crossPiece2 = new BoardRectangle(0,0,1,0);
  const crossPiece3 = new BoardRectangle(0,0,2,0);
  const circlePiece1 = new BoardRectangle(0,0,2,1);
  const circlePiece2 = new BoardRectangle(0,0,0,2);
  crossPiece1.type = 'cross';
  crossPiece2.type = 'cross';
  crossPiece3.type = 'cross';
  circlePiece1.type = 'circle';
  circlePiece2.type = 'circle';
  board.insertPiece(crossPiece1);
  board.insertPiece(crossPiece2);
  board.insertPiece(crossPiece3);
  board.insertPiece(circlePiece1);
  board.insertPiece(circlePiece2);
  const winnerChecker = new WinnerCheckerService(board);
  expect(winnerChecker.checkForWinner()).toBe(true);
  expect(winnerChecker.winner).toBe('cross');
});

test('cross is winner diagonal', () => {
  const board = new Board();
  const crossPiece1 = new BoardRectangle(0,0,0,0);
  const crossPiece2 = new BoardRectangle(0,0,1,1);
  const crossPiece3 = new BoardRectangle(0,0,2,2);
  const circlePiece1 = new BoardRectangle(0,0,2,1);
  const circlePiece2 = new BoardRectangle(0,0,0,2);
  crossPiece1.type = 'cross';
  crossPiece2.type = 'cross';
  crossPiece3.type = 'cross';
  circlePiece1.type = 'circle';
  circlePiece2.type = 'circle';
  board.insertPiece(crossPiece1);
  board.insertPiece(crossPiece2);
  board.insertPiece(crossPiece3);
  board.insertPiece(circlePiece1);
  board.insertPiece(circlePiece2);
  const winnerChecker = new WinnerCheckerService(board);
  expect(winnerChecker.checkForWinner()).toBe(true);
  expect(winnerChecker.winner).toBe('cross');
});

test('cross is winner vertical', () => {
  const board = new Board();
  const crossPiece1 = new BoardRectangle(0,0,1,0);
  const crossPiece2 = new BoardRectangle(0,0,1,1);
  const crossPiece3 = new BoardRectangle(0,0,1,2);
  const circlePiece1 = new BoardRectangle(0,0,2,1);
  const circlePiece2 = new BoardRectangle(0,0,2,2);
  crossPiece1.type = 'cross';
  crossPiece2.type = 'cross';
  crossPiece3.type = 'cross';
  circlePiece1.type = 'circle';
  circlePiece2.type = 'circle';
  board.insertPiece(crossPiece1);
  board.insertPiece(crossPiece2);
  board.insertPiece(crossPiece3);
  board.insertPiece(circlePiece1);
  board.insertPiece(circlePiece2);
  const winnerChecker = new WinnerCheckerService(board);
  expect(winnerChecker.checkForWinner()).toBe(true);
  expect(winnerChecker.winner).toBe('cross');
});

test('circle is winner', () => {
  const board = new Board();
  const crossPiece1 = new BoardRectangle(0,0,0,0);
  const crossPiece2 = new BoardRectangle(0,0,1,0);
  const circlePiece1 = new BoardRectangle(0,0,2,0);
  const circlePiece2 = new BoardRectangle(0,0,2,1);
  const circlePiece3 = new BoardRectangle(0,0,2,2);
  crossPiece1.type = 'cross';
  crossPiece2.type = 'cross';
  circlePiece1.type = 'circle';
  circlePiece2.type = 'circle';
  circlePiece3.type = 'circle';
  board.insertPiece(crossPiece1);
  board.insertPiece(crossPiece2);
  board.insertPiece(circlePiece1);
  board.insertPiece(circlePiece2);
  board.insertPiece(circlePiece3);
  const winnerChecker = new WinnerCheckerService(board);
  expect(winnerChecker.checkForWinner()).toBe(true);
  expect(winnerChecker.winner).toBe('circle');
});

