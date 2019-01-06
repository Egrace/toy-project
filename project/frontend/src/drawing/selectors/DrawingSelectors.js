const allShapes = (state) => {
  if (state.drawing.currentShape)
    return [...state.drawing.shapes, state.drawing.currentShape];

  return state.drawing.shapes;
};

export default {
  allShapes
}
