import React from "react";
import DrawArea from "../../drawing/components/DrawArea";
import {Button} from "reactstrap";
import DrawingActions from "../../drawing/actions/DrawingActions";
import {connect} from "react-redux";
import RecognizeOperations from "../operations/RecognizeOperations";
import DigitsRecognizerSelectors from "../selectors/DigitsRecognizerSelectors";
import Alert from "reactstrap/es/Alert";

const mapStateToProps = (state) => {
  return {
    isRecognizeButtonDisabled: DigitsRecognizerSelectors.isNothingDrawn(state),
    recognizeResult: state.digitsRecognizer.recognizeResult
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecognizeClick: () => dispatch(RecognizeOperations.recognize()),
    onResetClick: () => dispatch(DrawingActions.reset())
  }
};

class DigitsRecognizer extends React.Component {
  renderRecignizeResult() {
    if (!this.props.recognizeResult)
      return null;

    return <Alert color='success'>{`It is probably ${this.props.recognizeResult}!!!`}</Alert>
  }

  render() {
    return (
      <main role="main" className="container container--primary">
        <div className='py-5 text-center'>
          <h2>Simple digit recognizer</h2>
          <p className='lead'>
            This is the simple digit recognizer. Try to draw something below and click 'Recognize' button
          </p>
        </div>

        <div className='recognizing-container'>
          {this.renderRecignizeResult()}
          <div className='draw-area-container mb-4'>
            <DrawArea />
          </div>

          <Button
            color='primary'
            onClick={this.props.onRecognizeClick}
            disabled={this.props.isRecognizeButtonDisabled}
            className={`btn-block mb-3`}>
            Recognize
          </Button>

          <Button
            color='danger'
            onClick={this.props.onResetClick}
            className='btn-block mb-3'>
            Reset
          </Button>
        </div>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitsRecognizer);
