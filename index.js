const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const questions = require('./src/questions.js')
const generateHTML = require('./src/generateHtml.js')

let addMember = true
let teamLeader
let engineerTeam = []
let internTeam = []

async function getInquirer() {
    await inquirer
        .prompt(questions.main_questions)
        .then(async (response) => {
            teamLeader = new Manager(response.name, response.id, response.email, response.office)
            while (addMember) {
                await inquirer.prompt(questions.add_team_questions)
                    .then(async (response) => {
                        if (response.choices === "N/A") {
                            addMember = false
                        } else if (response.choices === "engineer") {
                            await inquirer.prompt(questions.engineer_questions)
                            .then(async(response) => {
                                let engineer = new Engineer(response.name, response.id, response.email, response.github)
                                engineerTeam.push(engineer)
                            })
                        } else if (response.choices === "intern") {
                            await inquirer.prompt(questions.intern_questions)
                            .then(async(response) => {
                                let intern = new Intern(response.name, response.id, response.email, response.school)
                                internTeam.push(intern)
                            })
                        }
                    })
            }
        })
    

}


function createHTMLFile() {
    fs.writeFile("index.html",htmlStr, (err) => err ? console.error(err) : console.log("File Generated"))
}

getInquirer();

async function init() {
    await getInquirer();
    const htmlStr = generateHTML(teamLeader, engineerTeam, internTeam);
}

init();
