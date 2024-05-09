// Import necessary modules
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');

// Define the questions for the user
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What text do you want in your logo?',
    validate: function(value) {
      if (value.length > 3) {
        return 'You can enter up to three characters only.';
      } else {
        return true;
      }
    },
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want for your logo?',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want for your shape?',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color do you want for your text?',
  },
];
// Function to generate the logo based on user's input
async function generateLogo() {
  const answers = await inquirer.prompt(questions);
  
  if (typeof answers.text === 'string' && answers.text.length > 3) {
    throw new Error('You can enter up to three characters only.');
  }

  // Determine the shape based on user's choice
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
  }

  const svg = shape.generateSVG(answers.text, answers.textColor);

// Get current date and time
const date = new Date();
const timestamp = date.getTime();

// Write the SVG to a file in the examples directory
return new Promise((resolve, reject) => {
  fs.writeFile(`examples/logo_${timestamp}.svg`, svg, (err) => {
    if (err) reject(err);
    console.log(`Generated examples/logo_${timestamp}.svg`);
    resolve(svg);
  });
});
}
// Export the function for testing
module.exports = { generateLogo };

// Call the function to run the application only if this file is being run directly
if (require.main === module) {
  generateLogo();
}