import { SquareGroup } from "../core/squareGroup";

// 方块坐标（逻辑坐标）
export interface point {
  readonly x: number;
  readonly y: number;
}

// 方块显示接口
export interface squareViewer {
  show(point: point): void;
  remove(): void;
}

// 形状
export type shapeType = point[];

/**
 * 游戏显示
 */
export interface IGame {
  gameDom: JQuery<HTMLElement>;
  prepareDom: JQuery<HTMLElement>;
  showNext: (tetri: SquareGroup) => void;
  switch: (tetri: SquareGroup) => void;
}

/**
 * 游戏状态
 */
export enum gameStatus {
  init,
  playing,
  pause,
  over,
}

/**
 * 移动方向
 */
export enum direction {
  up,
  down,
  left,
  right,
}
