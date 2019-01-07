import DigitsRecognizerActions from "../actions/DigitsRecognizerActions";

const recognize = () => (dispatch, getState) => {
  const image = getState().drawing.image;

  if (!image)
    return;

  return fetch('recognize_digit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ image })
  })
    .then(response => response.json())
    .then(result => dispatch(DigitsRecognizerActions.digitRecognized(result)))
};

export default {
  recognize
}
