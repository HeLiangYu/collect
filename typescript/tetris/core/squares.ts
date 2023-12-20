/**
 * 小方块类
 */

import { point } from "../types/types";
import { PageSquareViewer } from "./viewer/pageSquareViewer";

export class Squares {
  private _viewer?: PageSquareViewer;

  constructor(private _point: point, private _color: string) {}

  set point(val: point) {
    this._point = val;

    this._viewer?.show();
  }

  get point() {
    return this._point;
  }

  get color() {
    return this._color;
  }

  set viewer(val: PageSquareViewer) {
    this._viewer = val;
  }

  get viewer(): PageSquareViewer | undefined {
    return this._viewer;
  }
}
