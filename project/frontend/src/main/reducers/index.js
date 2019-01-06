import { combineReducers } from 'redux'
import drawingReducer from "../../drawing/reducers";
import digitsRecognizerReducer from "../../digits_recognizer/reducers";

const rootReducer = combineReducers({
  drawing: drawingReducer,
  digitsRecognizer: digitsRecognizerReducer
});

export default rootReducer;
