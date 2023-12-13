/**
 * 方块类
 * 形状
 * 中心坐标
 * 移动
 */

import { point, shapeType } from "../types/types";
import { Squares } from "./squares";
import { PageSquareViewer } from "./viewer/pageSquareViewer";

export class SquareGroup {
  private _squareGroup?: readonly Squares[];

  constructor(
    private _shape: shapeType,
    private _centerPoint: point,
    private _color: string
  ) {
    this.init();
  }

  /**
   * 移动
   * @param centerPoint
   */
  private move() {
    this.shape.forEach((p, index) => {
      if (this._squareGroup) {
        this._squareGroup[index].point = {
          x: p.x + this.centerPoint.x,
          y: p.y + this.centerPoint.y,
        };
      }
    });
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
      const viewer = new PageSquareViewer(square);

      square.viewer = viewer;

      arr.push(square);
    });

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
    this.move();
  }
}
