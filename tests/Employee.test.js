const Employee = require ('../lib/Employee.js');

describe('Employee', () => {
    describe('Initialization', () => {
        it("Create an Employee object with a Name, ID, and Email", () => {
            const employee = new Employee("John Wick", 3, "john.wick@hub.com");

            expect(employee.name).toEqual("John Wick");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("john.wick@hub.com")
        })
    })

    describe('getName', () => {
        it("Employee's Name", () => {
            const employee = new Employee("John Wick", 3, "john.wick@hub.com");
            
            expect(employee.getName()).toEqual("John Wick");
        })
    })

    describe('getId', () => {
        it("ID Number", () => {
            const employee = new Employee("John Wick", 3, "john.wick@hub.com");

            expect(employee.getId()).toEqual(3);
        })
    })

    describe('getEmail', () => {
        it("Employe's Email", () => {
            const employee = new Employee("John Wick", 3, "john.wick@hub.com");
            
            expect(employee.getEmail()).toEqual("john.wick@hub.com");
        })
    })
    
    describe('getRole', () => {
        it("Assigned Role", () => {
            const employee = new Employee("John Wick", 3, "john.wick@hub.com");

            expect(employee.getRole()).toEqual("Employee");
        })
    })
})