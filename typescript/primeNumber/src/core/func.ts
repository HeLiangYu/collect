import { isPrime } from "../utils/index";
import { Viewer } from "./viewer";

export class Func {
  private count: number = 1;
  private timeId?: any;

  constructor(private _viewer: Viewer) {}

  getNum() {
    const result = isPrime(this.count);
    this._viewer.setPanel(this.count, result);
    this.count++;
  }

  start() {
    this.timeId = setInterval(() => {
      this.getNum();
    }, 200);
  }

  pause() {
    clearInterval(this.timeId);
    this.timeId = undefined;
  }
}
