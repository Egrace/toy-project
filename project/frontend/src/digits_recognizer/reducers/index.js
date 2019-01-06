import {DIGIT_RECOGNIZED} from "../constants";
import {RESET} from "../../drawing/constants";

const digitsRecognizerReducer = (state = {}, action) => {
  switch (action.type) {
    case DIGIT_RECOGNIZED:
      return { ...state, recognizeResult: action.payload };

    case RESET:
      return { ...state, recognizeResult: null };

    default:
      return state;
  }
};

export default digitsRecognizerReducer;
