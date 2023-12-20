import { pageConfig, prepareConfig } from "../config/index";
import { direction, gameStatus, point } from "../types/types";
import { Rules } from "./rules";
import { SquareGroup } from "./squareGroup";
import { Squares } from "./squares";
import { getShape } from "./tetris";
import { GameViewer } from "./viewer/pageGameViewer";

export class Game {
  private _currentShape!: SquareGroup;
  private _nextShape!: SquareGroup;
  private gameStatus: gameStatus = gameStatus.init;
  private _timer?: any;
  private _timeLen = 1000;
  private _exist: Squares[] = [];

  constructor(private _viewer: GameViewer) {
    this.init();
  }

  init() {
    this.gameStatus = gameStatus.playing;
    this.createNext();
    this.switch();
    this.autoFall();
  }

  createNext() {
    this._nextShape = getShape({ x: 0, y: 0 });
    this.resetCenterPoint(prepareConfig.width, this._nextShape);
    this._viewer.showNext(this._nextShape);
  }

  switch() {
    this._currentShape = this._nextShape;
    this.resetCenterPoint(pageConfig.width, this._currentShape);
    this._viewer.switch(this._currentShape);

    this.createNext();
  }

  /**
   * 方块自动下落
   */
  autoFall() {
    if (this._timer || this.gameStatus !== gameStatus.playing) {
      return;
    }

    this._timer = setInterval(() => {
      if (!Rules.move(this._currentShape, direction.down, this._exist)) {
        this.hitBottom();
      }
    }, this._timeLen);
  }

  /**
   * 触底
   */
  hitBottom() {
    const arr: point[] =
      this._currentShape.squareGroup.map((square) => square.point) || [];

    this._exist = this._exist.concat(this._currentShape.squareGroup);

    // 消除
    Rules.delete(this._exist);

    this.switch();
  }

  resetCenterPoint(width: number, square: SquareGroup) {
    // 计算中心点坐标，让形状落在正确区域
    // x方向居中，y方向贴近最上一行
    const x = Math.ceil(width / 2) - 1;
    const y = 0;
    square.centerPoint = { x, y };

    while (square.squareGroup?.some((s) => s.point.y < 0)) {
      square.squareGroup.forEach((s) => {
        s.point = {
          x: s.point.x,
          y: s.point.y + 1,
        };
      });
    }
  }

  /**
   * 左移动
   */
  moveLeft() {
    Rules.move(this._currentShape, direction.left, this._exist);
  }

  /**
   * 左移动
   */
  moveRight() {
    Rules.move(this._currentShape, direction.right, this._exist);
  }

  /**
   * 左移动
   */
  moveDown() {
    Rules.move(this._currentShape, direction.down, this._exist);
  }

  get currentShape() {
    return this._currentShape;
  }
}
