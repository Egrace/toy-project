import {DIGIT_RECOGNIZED} from "../constants";

const digitRecognized = (result) => ({ type: DIGIT_RECOGNIZED, payload: result })

export default {
  digitRecognized
}
