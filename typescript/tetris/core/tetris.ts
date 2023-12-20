import { point, shapeType } from "../types/types";
import { getRandom } from "../untils/index";
import { SquareGroup } from "./squareGroup";

/**
 * 生成俄罗斯方块
 */

export const lineShape: shapeType = [
  {
    x: -1,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 1,
    y: 0,
  },
  {
    x: 2,
    y: 0,
  },
];

export const hillShape: shapeType = [
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: -1 },
  { x: 1, y: 0 },
];

export const fieldShape: shapeType = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
];

export const zShape: shapeType = [
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
];

export const lShape: shapeType = [
  { x: 0, y: -2 },
  { x: 0, y: -1 },
  { x: 0, y: 0 },
  { x: 1, y: 0 },
];

export const shapeList = [fieldShape];
// export const shapeList = [lineShape, hillShape, fieldShape, zShape, lShape];

/**
 * 颜色
 */
export const colorList = [
  "rgb(255,255,0)",
  "rgb(1,255,2)",
  "rgb(2,1,254)",
  "rgb(0, 255, 254)",
  "rgb(255,128,2)",
];

/**
 * 生成随机方块
 */
export const getShape = (point: point) => {
  const shapeRandom = getRandom(0, shapeList.length - 1);
  const colorRandom = getRandom(0, colorList.length - 1);

  const shape = shapeList[shapeRandom];
  const color = colorList[colorRandom];

  return new SquareGroup(shape, point, color);
};
