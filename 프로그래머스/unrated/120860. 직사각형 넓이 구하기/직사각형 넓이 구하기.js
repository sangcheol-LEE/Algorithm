class Solution {
  constructor(arr) {
    this.arr = arr;
  }
  getX_axisArray() {
    let x_axis_array = [];
    this.arr.forEach((element) => {
      x_axis_array.push(element[0]);
    });
    return x_axis_array;
  }
  getY_axisArray() {
    let y_axis_array = [];
    this.arr.forEach((element) => {
      y_axis_array.push(element[1]);
    });
    return y_axis_array;
  }
  getMaxX_axis() {
    return Math.max(...this.getX_axisArray());
  }
  getMinX_axis() {
    return Math.min(...this.getX_axisArray());
  }
  getMaxY_axis() {
    return Math.max(...this.getY_axisArray());
  }
  getMinY_axis() {
    return Math.min(...this.getY_axisArray());
  }
  getTotalLength() {
    return (
      (this.getMaxX_axis() - this.getMinX_axis()) *
      (this.getMaxY_axis() - this.getMinY_axis())
    );
  }
}

const ret = new Solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);
const ret2 = new Solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);
