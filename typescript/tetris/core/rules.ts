import { pageConfig } from "../config/index";
import { direction, point, shapeType } from "../types/types";
import { SquareGroup } from "./squareGroup";
import { Squares } from "./squares";

/**
 * 规则类
 */
export class Rules {
  /**
   * 是否可以移动到某个点
   */
  static canMove(
    shape: shapeType,
    centerPoint: point,
    exist: Squares[]
  ): Boolean {
    // 每个方块根据中心点移动后是否有超出边界
    const targetPointList: point[] = shape.map((point) => {
      const targetPoint: point = {
        x: point.x + centerPoint.x,
        y: point.y + centerPoint.y,
      };

      return targetPoint;
    });

    // 边界判断
    let result = targetPointList.some((point) => {
      return (
        point.x < 0 ||
        point.x > pageConfig.width - 1 ||
        point.y > pageConfig.height - 1
      );
    });

    if (result) return false;

    // 判断与已存在的方块是否有重合
    result = targetPointList.some((s) => {
      return exist.some((p) => p.point.x === s.x && p.point.y === s.y);
    });

    if (result) {
      return false;
    }

    return true;
  }

  /**
   * 移动
   */
  static move(
    square: SquareGroup,
    currentDirection: direction,
    exist: Squares[]
  ) {
    const point = this.getMovePoint(square.centerPoint, currentDirection);
    let result = this.canMove(square.shape, point, exist);
    if (result) {
      square.centerPoint = point;
      return true;
    }

    return false;
  }

  /**
   * 移动方向
   * @param centerPoint
   * @param currentDirection
   * @returns
   */
  static getMovePoint(centerPoint: point, currentDirection: direction): point {
    const obj: {
      [direction.down]: point;
      [direction.left]: point;
      [direction.right]: point;
      [direction.up]: point;
    } = {
      [direction.down]: {
        x: centerPoint.x,
        y: centerPoint.y + 1,
      },
      [direction.up]: {
        x: centerPoint.x,
        y: centerPoint.y - 1,
      },
      [direction.left]: {
        x: centerPoint.x - 1,
        y: centerPoint.y,
      },
      [direction.right]: {
        x: centerPoint.x + 1,
        y: centerPoint.y,
      },
    };

    return obj[currentDirection];
  }

  static delete(exist: Squares[]) {
    const yList = exist.map((p) => p.point.y);
    const minY = Math.min(...yList);
    const maxY = Math.max(...yList);

    for (let i = minY; i <= maxY; i++) {
      this.deleteLine(exist, i);
    }
  }

  static deleteLine(exist: Squares[], y: number) {
    const square = exist.filter((p) => p.point.y === y);

    // 此行可删除
    if (square.length === pageConfig.width) {
      square.forEach((s) => {
        // 当前方块删除
        s.viewer?.remove();

        const index = exist.indexOf(s);
        exist.splice(index, 1);
      });

      // 其他方块比当前方块小的，y+1
      exist.forEach((sq) => {
        if (sq.point.y < y) {
          sq.point = {
            x: sq.point.x,
            y: sq.point.y + 1,
          };
        }
      });
    }
  }
}
