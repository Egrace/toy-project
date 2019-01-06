import DigitsRecognizerActions from "../actions/DigitsRecognizerActions";

const recognize = () => (dispatch, getState) => {
  const image = getState().drawing.image;

  if (!image)
    return;

  return fetch('recognize_digit', { method: 'POST', body: { image } })
    .then(response => response.json())
    .then(result => dispatch(DigitsRecognizerActions.digitRecognized(result)))
};

export default {
  recognize
}
