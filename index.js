class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter and setter for radius
  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      throw new Error("Radius must be positive");
    }
  }

  // Diameter getter and setter
  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  // Circumference getter and setter
  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI);
  }

  // Area getter and setter
  get area() {
    return Math.PI * this.radius ** 2;
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}