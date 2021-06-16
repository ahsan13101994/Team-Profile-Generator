function generateManager(manager) {
    return `\n <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-user-tie"></i>  ${manager.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div> \n`
}

function generateEngineer(engineer) {
    return `\n <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-user-astronaut"></i>  ${engineer.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
        </ul>
    </div>
</div> \n`
}

function generateIntern(intern) {
    return `\n <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-user"></i> ${intern.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div> \n`
}

function generateTeam(manager, listofEngineers, listofInterns) {
    allCards = '';
    allCards += generateManagerCard(manager);
    listofEngineers.forEach((engineer) => {
        allCards += generateEngineerCard(engineer);
    })
    listofInterns.forEach((intern) => {
        allCards += generateInternCard(intern);
    })
    return allCards
}


function generateHTML(employees) {

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css"/>
        <script src="https://kit.fontawesome.com/2582deff5b.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <main>
        <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
        ${generateTeam(manager, listofEngineers, listofInterns)}
        </div>
        </main>
    </body>
    </html>`
}

module.exports = generateHTML;