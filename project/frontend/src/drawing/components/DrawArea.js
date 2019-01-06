import React from 'react';
import {Stage, Layer, Line} from 'react-konva';
import DrawingActions from "../actions/DrawingActions";
import {connect} from "react-redux";
import DrawingSelectors from "../selectors/DrawingSelectors";

const mapStateToProps = (state) => {
  return {
    shapes: DrawingSelectors.allShapes(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseDown: (x, y, image) => dispatch(DrawingActions.mouseDown(x, y, image)),
    onMouseUp: (x, y, image) => dispatch(DrawingActions.mouseUp(x, y, image)),
    onMouseMove: (x, y, image) => dispatch(DrawingActions.mouseMove(x, y, image)),
    onMouseOut: () => dispatch(DrawingActions.mouseOut())
  }
};

class DrawArea extends React.Component {
  getImage() {
    return this.refs.stage.toDataURL();
  }

  _onMouseDown = (e) => {
    const {layerX, layerY} = e.evt;
    this.props.onMouseDown(layerX, layerY, this.getImage());
  };

  _onMouseMove = (e) => {
    const {layerX, layerY} = e.evt;
    this.props.onMouseMove(layerX, layerY, this.getImage());
  };

  _onMouseUp = (e) => {
    const {layerX, layerY} = e.evt;
    this.props.onMouseUp(layerX, layerY, this.getImage());
  };

  _renderShapes() {
    return this.props.shapes.map((shape, index) => {
      return (
        <Line
          stroke='black'
          strokeWidth={10}
          points={shape.flattenPoints()}
          key={`shape-${index}`}
          lineCap='round'
          lineJoin='round' />
      )
    });
  }

  render() {
    return (
      <div onMouseLeave={this.props.onMouseOut}>
        <Stage
          width={300}
          height={300}
          onMouseDown={this._onMouseDown}
          onMouseUp={this._onMouseUp}
          onMouseMove={this._onMouseMove}
          ref='stage'>
          <Layer>
            {this._renderShapes()}
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawArea);
