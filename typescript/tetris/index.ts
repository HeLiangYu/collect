import { SquareGroup } from "./core/squareGroup";
import { Squares } from "./core/squares";
import { getShape } from "./core/tetris";
import { PageSquareViewer } from "./core/viewer/pageSquareViewer";
import $ from "jquery";

const shapeConfig = getShape();
console.log(shapeConfig);

const shape = new SquareGroup(
  shapeConfig.shape,
  { x: 1, y: 1 },
  shapeConfig.color
);

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
