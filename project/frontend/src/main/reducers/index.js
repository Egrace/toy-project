import { combineReducers } from 'redux'
import drawingReducer from "../../drawing/reducers";
import digitsRecognizerReducer from "../../digits_recognizer/reducers";
import {menuReducer} from "../../menu/reducers/menuReducer";

const rootReducer = combineReducers({
  drawing: drawingReducer,
  digitsRecognizer: digitsRecognizerReducer,
  menu: menuReducer
});

export default rootReducer;
