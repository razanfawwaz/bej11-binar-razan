const EmployeeInfra = require("../infrastructure/employee");

const employeeInfra = new EmployeeInfra();

const getEmployees = (req, res) => {
  res.send(employeeInfra.getEmployees());
};

const addEmployee = (req, res) => {
  const { name, age, salary } = req.body;

  const addEmployee = employeeInfra.addEmployee({ name, age, salary });
  if (!addEmployee) {
    res.status(400).send({ message: "Employee not added" });
    return;
  }

  res.send({ message: "Employee added" });
};

const deleteEmployee = (req, res) => {
  const { id } = req.params;
  const deleteData = employeeInfra.deleteEmployeeById(id);
  if (!deleteData) {
    res.status(404).send({ message: "Employee not found" });
    return;
  }
  res.send({ message: "Employee deleted" });
};

const getEmployeeById = (req, res) => {
  const { id } = req.params;
  const employee = employeeInfra.getEmployeeById(id);
  if (!employee) {
    res.status(404).send({ message: "Employee not found" });
    return;
  }
  res.send(employee);
};

const editEmployeeById = (req, res) => {
  const { id } = req.params;
  const { name, age, salary } = req.body;

  const editEmployee = employeeInfra.editEmployeeById(id, {
    name,
    age,
    salary,
  });
  if (!editEmployee) {
    res.status(400).send({ message: "Employee not edited" });
    return;
  }

  res.send({ message: "Employee edited" });
};

module.exports = {
  getEmployees,
  addEmployee,
  deleteEmployee,
  getEmployeeById,
  editEmployeeById,
};
