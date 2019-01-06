class Shape {
  constructor(points = []) {
    this.points = points;
  }

  cloneWithPoint(point) {
    return new Shape([...this.points, point]);
  }

  clone() {
    return new Shape([...this.points]);
  }

  flattenPoints() {
    return this.points.reduce((accumulator, point) => [...accumulator, point.x, point.y], []);
  }
}

export default Shape;
