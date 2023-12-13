import { SquareGroup } from "./core/squareGroup";
import { Squares } from "./core/squares";
import { PageSquareViewer } from "./core/viewer/pageSquareViewer";
import $ from "jquery";

const shape = new SquareGroup();

$("#up").on("click", function () {
  shape.centerPoint = { x: shape.centerPoint.x, y: shape.centerPoint.y - 1 };
});

$("#down").on("click", function () {
  shape.centerPoint = { x: shape.centerPoint.x, y: shape.centerPoint.y + 1 };
});

$("#left").on("click", function () {
  shape.centerPoint = { x: shape.centerPoint.x - 1, y: shape.centerPoint.y };
});

$("#right").on("click", function () {
  shape.centerPoint = { x: shape.centerPoint.x + 1, y: shape.centerPoint.y };
});
