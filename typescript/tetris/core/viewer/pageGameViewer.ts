import $ from "jquery";
import { pageConfig, squareConfig } from "../../config/index";
import { IGame } from "../../types/types";
import { SquareGroup } from "../squareGroup";
import { PageSquareViewer } from "./pageSquareViewer";

/**
 * 游戏显示类
 */
export class GameViewer implements IGame {
  gameDom: JQuery<HTMLElement> = $("#game");
  prepareDom: JQuery<HTMLElement> = $("#prepare");

  showNext(tetri: SquareGroup) {
    tetri.squareGroup?.forEach((square) => {
      const viewer = new PageSquareViewer(square, this.prepareDom);
      square.viewer = viewer;
    });
  }
  switch(tetri: SquareGroup) {
    tetri.squareGroup?.forEach((square) => {
      square.viewer?.remove();
      const viewer = new PageSquareViewer(square, this.gameDom);
      square.viewer = viewer;
    });
  }

  //   // 初始化游戏区域
  //   static init() {
  //     this.gameDom.css({
  //       width: pageConfig.width * squareConfig.height + "px",
  //       height: pageConfig.height * squareConfig.height + "px",
  //     });
  //   }
}
