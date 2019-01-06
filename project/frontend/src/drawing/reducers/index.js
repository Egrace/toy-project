import {MOUSE_DOWN, MOUSE_MOVE, MOUSE_OUT, MOUSE_UP, RESET} from "../constants";
import Shape from "../models/Shape";
import Point from "../models/Point";

const createPoint = ({ payload }) => {
  return new Point(payload.x, payload.y)
};

const drawingReducer = (state = {}, action) => {
  switch (action.type) {
    case MOUSE_DOWN:
      const newShape = new Shape([createPoint(action)]);

      return {
        ...state,
        currentShape: newShape,
        image: action.payload.image
      };

    case MOUSE_UP:
      if (state.currentShape)
        return {
          ...state,
          currentShape: null,
          image: action.payload.image,
          shapes: [
            ...state.shapes,
            state.currentShape.cloneWithPoint(createPoint(action))
          ]
        };

    case MOUSE_MOVE:
      if (state.currentShape)
        return {
          ...state,
          currentShape: state.currentShape.cloneWithPoint(createPoint(action)),
          image: action.payload.image
        };

      return state;

    case MOUSE_OUT:
      if (state.currentShape)
        return {
          ...state,
          currentShape: null,
          shapes: [
            ...state.shapes,
            state.currentShape.clone()
          ],
        };

      return state;

    case RESET:
      return {
        currentShape: null,
        image: null,
        shapes: []
      };

    default:
      return state;
  }
};

export default drawingReducer;
