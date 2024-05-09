// Exports , , and  classes
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    generateSVG(text, textColor) {
      throw new Error('Method generateSVG() must be implemented.');
    }
  }
  
  class Triangle extends Shape {
    generateSVG(text, textColor) {
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,10 280,190 20,190" fill="${this.color}" />
          <text x="150" y="100" font-size="35" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
      `;
    }
  }
  
  class Circle extends Shape {
    generateSVG(text, textColor) {
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${this.color}" />
          <text x="150" y="100" font-size="35" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
      `;
    }
  }
  
  class Square extends Shape {
    generateSVG(text, textColor) {
      return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
      <text x="150" y="100" font-size="35" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
      `;
    }
  }
  
  module.exports = { Triangle, Circle, Square };