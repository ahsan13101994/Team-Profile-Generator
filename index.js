const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const questions = require('./src/questions.js')