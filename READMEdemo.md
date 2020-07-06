function generateMarkdown(answers) {

        return `
# ${answers.title}
[![License: ${licenseArray[0]}](${licenseArray[1]})](${licenseArray[2]})
#### Table of Contents
* [Description](##Description)
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)
## Description
${answers.description}
## Installation
${answers.installation}
## Usage 
${answers.usage}
## License
${licenseArray[3]}
## Contributing
${answers.contributing}
## Tests
${answers.test}
## Questions
For questions, email me at: ${answers.email} <br />
Or visit my Github [here](https://github.com/${answers.github})
        `
};