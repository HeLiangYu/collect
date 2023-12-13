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
