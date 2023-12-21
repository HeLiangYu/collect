import { getRandom } from "../../../tetris/untils/index";
import { getColor } from "../utils/index";

export class Viewer {
  private panel!: HTMLElement;
  private big!: HTMLElement;
  private body!: HTMLElement;

  constructor() {
    this.panel = document.getElementById("panel")!;
    this.big = document.getElementById("big")!;
    this.body = document.querySelector("body")!;
  }

  setPanel(num: number, isPrime: boolean) {
    const span = document.createElement("span");
    span.innerHTML = num.toString();
    const color = getColor();
    if (isPrime) {
      span.style.color = color;
    }

    this.setCenter(num, isPrime, color);

    this.panel?.appendChild(span);
  }

  setCenter(num: number, isPrime: boolean, color: string) {
    this.big.innerHTML = num.toString();

    if (isPrime) {
      const div = document.createElement("div");
      div.innerHTML = num.toString();
      if (isPrime) {
        div.style.color = color;
      }
      div.className = "center";
      this.body?.appendChild(div);

      getComputedStyle(div).left;

      div.style.opacity = "0";
      div.style.transform = `translate(${getRandom(-150, 150)}px, ${getRandom(
        -150,
        150
      )}px)`;
    }
  }
}
