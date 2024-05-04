const Employee = require("../dto/employee");

class EmployeeInfra {
  constructor() {
    this.employees = [];
  }

  getEmployees() {
    console.log("get all employees");
    return this.employees;
  }

  addEmployee({ name, age, salary }) {
    const id = this.employees.length + 1;
    const employee = new Employee(id, name, age, salary);
    this.employees.push(employee);
    console.log("add: ", employee.id, employee.name);
    return true;
  }

  getEmployeeById(id) {
    console.log("get: ", id);

    const employee = this.employees.find((employee) => employee.id == id);
    console.log("got: ", employee);

    if (!employee) {
      return false;
    }

    return employee;
  }

  editEmployeeById(id, { name, age, salary }) {
    console.log("edit: ", id);
    const employee = this.getEmployeeById(id);
    if (!employee) {
      return false;
    }
    employee.name = name;
    employee.age = age;
    employee.salary = salary;
    console.log("edited: ", employee);
    return true;
  }

  deleteEmployeeById(id) {
    console.log("delete: ", id);
    const initialLength = this.employees.length;
    this.employees = this.employees.filter((employee) => employee.id != id);
    const isDeleted = this.employees.length < initialLength;
    console.log("deleted: ", isDeleted);
    return isDeleted;
  }
}

module.exports = EmployeeInfra;
