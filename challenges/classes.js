// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(width, length, height) {
    (this.length = length), (this.width = width), (this.height = height);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}
const cuboid = new CuboidMaker(5, 4, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(width) {
    super(width);
  }
  volume() {
    return Math.pow(this.width, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.width, 2);
  }
}

const cube = new CubeMaker(5);
console.log(cube.width);
console.log(cube.volume());
console.log(cube.surfaceArea());
