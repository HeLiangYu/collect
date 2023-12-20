import { squareConfig } from "../../config/index";
import { point, squareViewer } from "../../types/types";
import $ from "jquery";
import { Squares } from "../squares";

export class PageSquareViewer implements squareViewer {
  private _dom?: JQuery<HTMLElement>;

  constructor(private square: Squares, private _wrap: JQuery<HTMLElement>) {
    this.show();
  }

  show(): void {
    if (!this._dom) {
      this._dom = $("<div>")
        .css({
          width: squareConfig.width + "px",
          height: squareConfig.height + "px",
          position: "absolute",
          backgroundColor: this.square.color,
          boxSizing: "border-box",
          border: "1px solid #ccc",
        })
        .appendTo(this._wrap);
    }

    this._dom.css({
      left: this.square.point.x * squareConfig.width + "px",
      top: this.square.point.y * squareConfig.height + "px",
    });
  }
  remove(): void {
    this._dom?.remove();
  }
}
