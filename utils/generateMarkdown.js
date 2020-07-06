// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  # ${answers.title}

  ![](https://img.shields.io/badge/License-${answers.license}-red)

  ## Description

  ${answers.description}

  ## Table of Contents:

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Credits

  ${answers.credits}

  ## License

  ${answers.license}

  ## Contributions

  ${answers.contributions}

  ## Tests

  ${answers.tests}

  ## Authors

  ${answers.author}

  ## Questions

  "For questions, email me at: ${answers.email}"
  "Or visit my Github (https://github.com/${answers.github})"
  
  

`;
}

module.exports = generateMarkdown;
