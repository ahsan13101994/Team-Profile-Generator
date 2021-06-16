const Manager = require ('../lib/Manager.js');

describe('Manager', () => {
    describe('Initialization', () => {
        it("Create an Employee object with a Name, ID, and Email", () => {
            const manager = new Manager("John Wick", 3, "john.wick@hub.com", 5);

            expect(manager.name).toEqual("John Wick");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("john.wick@hub.com")
            expect(manager.officeNumber).toEqual(5)
        })
    })

    describe('getName', () => {
        it("Manager's name", () => {
            const manager = new Manager("John Wick", 3, "john.wick@hub.com", 5);
            
            expect(manager.getName()).toEqual("John Wick");
        })
    })

    describe('getId', () => {
        it("Manager's ID", () => {
            const manager = new Manager("John Wick", 3, "john.wick@hub.com", 5);

            expect(manager.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("Manager's email", () => {
            const manager = new Manager("John Wick", 3, "john.wick@hub.com", 5);
            
            expect(manager.getEmail()).toEqual("john.wick@hub.com");
        })
    })

    describe('getOfficeNumber', () => {
        it("Manager's Office Number", () => {
            const manager = new Manager("John Wick", 3, "john.wick@hub.com", 5);
            
            expect(manager.getOfficeNumber()).toEqual(5);
        })
    })
    
    describe('getRole', () => {
        it("Manager's role", () => {
            const manager = new Manager("John Wick", 3, "john.wick@hub.com", 5);

            expect(manager.getRole()).toEqual("Manager");
        })
    })
})