// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}
  
  ## Installtion

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Contributions

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Authors

  ${data.authors}

  ## Questions

  "For questions, email me at: ${data.email}" <br />
  "Or visit my Github (https://github.com/${data.github})"
  
  

`;
}

module.exports = generateMarkdown;
