// Import the shape classes
const { Circle, Square, Triangle } = require('./shapes');

// Test the generateSVG method for each shape
describe('Shape classes', () => {
  it('should render a circle SVG', () => {
    const circle = new Circle('red');
    expect(circle.generateSVG()).toContain('<circle');
    expect(circle.generateSVG()).toContain('fill="red"');
  });

  it('should render a square SVG', () => {
    const square = new Square('blue');
    expect(square.generateSVG()).toContain('<rect');
    expect(square.generateSVG()).toContain('fill="blue"');
  });

  it('should render a triangle SVG', () => {
    const triangle = new Triangle('green');
    expect(triangle.generateSVG()).toContain('<polygon');
    expect(triangle.generateSVG()).toContain('fill="green"');
  });
});