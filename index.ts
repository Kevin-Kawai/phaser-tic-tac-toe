import 'phaser';
import boardRectangle from "./pieces/boardRectangle.ts";
import Board from './pieces/board.ts';
import WinnerCheckerService from "./services/winnerCheckerService.ts";
import computerPlayer from "./opponent/computerPlayer.ts"

class InitialScene extends Phaser.Scene {
  score: number;
  circleTurn: boolean;
  board: Board;
  constructor() {
    super({
      key: "GameScene"
    })
  }
  // called when the scene starts
  init(params: any): void {
    this.score = 0;
    this.circleTurn = true;
    this.board = new Board;
  }

  // called before scene objects are created
  preload(): void {
    this.load.image("cross", "public/assets/cross.png");
    this.load.image("circle", "public/assets/circle.png");
  }

  create(): void {
    const AI = new computerPlayer('cross', this.board);
    const generateObject = (rectObject: boardRectangle): void => {
      if (rectObject.type !== undefined || this.board.winner !== null) {
        return;
      }
      if (this.board.board[rectObject.xPosition][rectObject.yPosition] !== null) {
        return
      }
      if (this.circleTurn) {
        this.add.image(rectObject.x, rectObject.y, "circle").setDisplaySize(60, 60);
        rectObject.type = "circle";
        this.board.insertPiece(rectObject);
      }
      checkWin();
      this.circleTurn = !this.circleTurn;
      postActionCheck();
    };

    const checkWin = () => {
      const winnerChecker = new WinnerCheckerService(this.board);
      if(winnerChecker.checkForWinner()) {
        if(winnerChecker.winner === 'cross') {
          this.add.text(0, 0, 'Cross Wins', { fontFamily: '"Roboto Condensed"', color: "#000" });
        } else {
          this.add.text(0, 0, 'Circle Wins', { fontFamily: '"Roboto Condensed"', color: "#000" });
        }
      }
    };
    const postActionCheck = () => {
      if(!this.circleTurn) {
        const pieceToInsert = AI.makeMove();
        const xValue = 300 + (pieceToInsert.xPosition * 100);
        const yValue = 200 + (pieceToInsert.yPosition * 100);
        this.add.image(xValue, yValue, pieceToInsert.type).setDisplaySize(60, 60);
        this.board.insertPiece(pieceToInsert);
        this.circleTurn = !this.circleTurn;
      }
      checkWin();
    };

    for(var i = 0; i < 3; i++) {
      for (var f = 0; f < 3; f++) {
        let xValue = 300 + (i * 100);
        let yValue = 200 + (f * 100);
        let rectToRender = this.add.rectangle( xValue, yValue, 100, 100);
        let rect = new boardRectangle(xValue, yValue, i, f);
        rectToRender.setStrokeStyle(2, 0)
        rectToRender.setInteractive();
        rectToRender.on('pointerdown',function() {
          generateObject(rect);
        });
      }
    }
  }
}

const config: Phaser.Types.Core.GameConfig = {
  title: "Tic-Tac-Toe",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#00f1ff",
  scene: [InitialScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

export class TicTacToeGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

window.onload = () => {
  var game = new TicTacToeGame(config);
}
