const express = require("express");

const router = express.Router();

const clientsHandler = require("../handler/clients-handler");
const employeesHandler = require("../handler/employee-handler");

router.get("/clients", clientsHandler.getClients);
router.post("/clients", clientsHandler.addClient);
router.delete("/clients/:id", clientsHandler.deleteClient);
router.get("/clients/:id", clientsHandler.getClientById);

router.get("/employees", employeesHandler.getEmployees);
router.post("/employees", employeesHandler.addEmployee);
router.delete("/employees/:id", employeesHandler.deleteEmployee);
router.get("/employees/:id", employeesHandler.getEmployeeById);
router.put("/employees/:id", employeesHandler.editEmployeeById);

module.exports = router;
