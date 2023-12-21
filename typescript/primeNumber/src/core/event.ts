import { Func } from "./func";

export class Event {
  private _game?: Func;
  private status: boolean = true;

  start() {
    this._game?.start();

    window.addEventListener("click", () => {
      if (this.status) {
        this._game?.pause();
      } else {
        this._game?.start();
      }

      this.status = !this.status;
    });
  }

  set game(data: Func) {
    this._game = data;
    this.start();
  }
}
