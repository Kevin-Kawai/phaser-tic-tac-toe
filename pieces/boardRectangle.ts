export default class BoardRectangle {
  x: number;
  y: number;
  xPosition: number;
  yPosition: number;
  type: string;
  constructor(x: number, y: number, xPosition: number, yPosition: number) {
    this.x = x;
    this.y = y;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  isCross(): boolean {
    if(this.type === 'cross') {
      return true;
    } else {
      return false;
    }
  }

  equals(other: BoardRectangle): boolean {
    if(this.type === other.type) {
      return true;
    }
    return false;
  }
}
