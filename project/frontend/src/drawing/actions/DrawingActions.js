import {MOUSE_DOWN, MOUSE_MOVE, MOUSE_OUT, MOUSE_UP, RESET} from "../constants";

const mouseDown = (x, y, image) => ({ type: MOUSE_DOWN, payload: {x, y, image} });
const mouseUp = (x, y, image) => ({ type: MOUSE_UP, payload: {x, y, image} });
const mouseMove = (x, y, image) => ({ type: MOUSE_MOVE, payload: {x, y, image} });
const mouseOut = () => ({ type: MOUSE_OUT });
const reset = () => ({ type: RESET });

export default {
  mouseDown,
  mouseUp,
  mouseMove,
  mouseOut,
  reset
}
