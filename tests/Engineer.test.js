const Engineer = require ('../lib/Engineer.js');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("Create an Engineer object with a Name, ID, and Email", () => {
            const engineer = new Engineer("John Wick", 3, "john.wick@hub.com", "gitjohnwick");

            expect(engineer.name).toEqual("John Wick");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("john.wick@hub.com")
            expect(engineer.github).toEqual("gitjohnwick")
        })
    })

    describe('getName', () => {
        it("Engineer's Name", () => {
            const engineer = new Engineer("John Wick", 3, "john.wick@hub.com");
            
            expect(engineer.getName()).toEqual("John Wick");
        })
    })

    describe('getId', () => {
        it("ID Number", () => {
            const engineer = new Engineer("John Wick", 3, "john.wick@hub.com");

            expect(engineer.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("Employe's Email", () => {
            const engineer = new Engineer("John Wick", 3, "john.wick@hub.com");
            
            expect(engineer.getEmail()).toEqual("john.wick@hub.com");
        })
    })
    
    describe('getRole', () => {
        it("Assigned Role", () => {
            const engineer = new Engineer("John Wick", 3, "john.wick@hub.com");

            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})