const Intern = require ('../lib/Intern.js');

describe('Intern', () => {
    describe('Initialization', () => {
        it("Create an Engineer object with a Name, ID, and Email", () => {
            const intern = new Intern("John Wick", 3, "john.wick@hub.com", "UofT");

            expect(intern.name).toEqual("John Wick");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("john.wick@hub.com")
            expect(intern.school).toEqual("UofT")
        })
    })

    describe('getName', () => {
        it("Intern's name", () => {
            const intern = new Intern("John Wick", 3, "john.wick@hub.com", "UofT");
            
            expect(intern.getName()).toEqual("John Wick");
        })
    })

    describe('getId', () => {
        it("Intern's ID", () => {
            const intern = new Intern("John Wick", 3, "john.wick@hub.com", "UofT");

            expect(intern.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("Intern's email", () => {
            const intern = new Intern("John Wick", 3, "john.wick@hub.com", "UofT");
            
            expect(intern.getEmail()).toEqual("john.wick@hub.com");
        })
    })

    describe('getSchool', () => {
        it("Intern's school", () => {
            const intern = new Intern("John Wick", 3, "john.wick@hub.com", "UofT");

            expect(intern.getSchool()).toEqual("UofT")
        })
    })
    
    describe('getRole', () => {
        it("Intern's role", () => {
            const intern = new Intern("John Wick", 3, "john.wick@hub.com", "UofT");

            expect(intern.getRole()).toEqual("Intern");
        })
    })
})