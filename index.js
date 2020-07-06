// Require filescript
const fs = require("fs");
// Require inquirer
const inquirer = require("inquirer");
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the tite of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a thorough description of how you project works."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use"
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "checkbox",
        name: "licenses",
        message: "Choose a license. If you need help choosing a license, use https://choosealicense.com/",
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "Boost",
            "MPL",
            "Public Domain (Unlicensed"
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.",
    },
    {
        type: "input",
        name: "tests",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them."
    },
    {
        type: "input",
        name: "author",
        message: "Who are the authors of this project?"
    },
    {
        type: "input",
        name: "github",
        message: "Enter Github username here."
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address here."
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
