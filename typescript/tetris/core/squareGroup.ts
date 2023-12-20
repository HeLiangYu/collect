/**
 * 方块类
 * 形状
 * 中心坐标
 * 移动
 */

import { point, shapeType } from "../types/types";
import { Rules } from "./rules";
import { Squares } from "./squares";
import { getShape } from "./tetris";
import { PageSquareViewer } from "./viewer/pageSquareViewer";

export class SquareGroup {
  private _squareGroup!: readonly Squares[];

  constructor(
    private _shape: shapeType,
    private _centerPoint: point,
    private _color: string
  ) {
    this.init();
  }

  /**
   * 初始化
   */
  private init() {
    const arr: Squares[] = [];

    this.shape.forEach((point) => {
      const square = new Squares(
        {
          x: point.x + this.centerPoint.x,
          y: point.y + this.centerPoint.y,
        },
        this._color
      );
      arr.push(square);
    });

    this.centerPoint = this._centerPoint;
    this._squareGroup = arr;
  }

  get shape() {
    return this._shape;
  }

  get centerPoint() {
    return this._centerPoint;
  }

  set centerPoint(centerPoint: point) {
    this._centerPoint = centerPoint;

    this.shape.forEach((p, index) => {
      if (this._squareGroup) {
        this._squareGroup[index].point = {
          x: p.x + this.centerPoint.x,
          y: p.y + this.centerPoint.y,
        };
      }
    });
  }

  get color() {
    return this._color;
  }

  get squareGroup() {
    return this._squareGroup;
  }

  /**
   * 向下移动
   */
  moveDown() {
    this.centerPoint = { x: this.centerPoint.x, y: this.centerPoint.y + 1 };
  }

  /**
   * 向左移动
   */
  moveLeft() {
    this.centerPoint = { x: this.centerPoint.x - 1, y: this.centerPoint.y };
  }

  /**
   * 向右移动
   */
  moveRight() {
    this.centerPoint = { x: this.centerPoint.x + 1, y: this.centerPoint.y };
  }

  /**
   * 旋转
   */
  rotate() {
    const newShape = this.shape.map((p) => ({
      x: p.y,
      y: p.x,
    }));

    this._shape = newShape;
    newShape.forEach((p, index) => {
      this.squareGroup[index].point = {
        x: this.centerPoint.x + p.x,
        y: this.centerPoint.y + p.y,
      };
    });
  }
}
