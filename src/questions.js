const main_questions = [
    {
        name: "name",
        type: "input",
        message: "What is the team manager's name?: "
    },
    {
        name: "id",
        type: "input",
        message: "What is the team manager's ID number?: ",
    },
    {
        name: "email",
        type: "input",
        message: "What is the team manager's email?: "
    },
    {
        name: "office",
        type: "input",
        message: "What is the team manager's office number?: "
    },
]

const engineer_questions = [
    {
        name: "name",
        message: "What is your engineer's name?: "
    },
    {
        name: "id",
        message: "What is your engineer's ID?: "
    },
    {
        name: "email",
        message: "What is your engineer's email?: "
    },
    {
        name: "github",
        message: "What is your engineer's github?: "
    }
]

const intern_questions = [
    {
        name: "name",
        message: "What is your intern's name?: "
    },
    {
        name: "id",
        message: "What is your intern's ID?: "
    },
    {
        name: "email",
        message: "What is your intern's email?: "
    },
    {
        name: "school",
        message: "What is your intern's school?: "
    }
]

const add_team_questions = [
    {
        name: "choices",
        type: "list",
        message: "Add a team member: ",
        choices: ["engineer", "intern", "N/A"]
    }
]

module.exports = {main_questions,engineer_questions,intern_questions,add_team_questions}