import { Event } from "./core/event";
import { Func } from "./core/func";
import { Viewer } from "./core/viewer";

const fn = new Func(new Viewer());
const event = new Event();

event.game = fn;
