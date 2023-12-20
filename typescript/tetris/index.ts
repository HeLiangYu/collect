import { Game } from "./core/game";
import { GameViewer } from "./core/viewer/pageGameViewer";
import $ from "jquery";

const game = new Game(new GameViewer());

$("#rotate").on("click", function () {
  game.currentShape.rotate();
});

$("#down").on("click", function () {
  game.moveDown();
});

$("#left").on("click", function () {
  game.moveLeft();
});

$("#right").on("click", function () {
  game.moveRight();
});
