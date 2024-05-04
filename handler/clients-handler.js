const Clients = require("../infrastructure/clients");

const clients = new Clients();

const getClients = (req, res) => {
  res.send(clients.getClients());
};

const addClient = (req, res) => {
  const { storeName, address, phone } = req.body;

  const addClient = clients.addClient({ storeName, address, phone });
  if (!addClient) {
    res.status(400).send({ message: "Client not added" });
    return;
  }

  res.send({ message: "Client added" });
};

const deleteClient = (req, res) => {
  const { id } = req.params;
  const deleteData = clients.deleteClientById(id);
  if (!deleteData) {
    res.status(404).send({ message: "Client not found" });
    return;
  }
  res.send({ message: "Client deleted" });
};

const getClientById = (req, res) => {
  const { id } = req.params;
  const client = clients.getClientById(id);
  if (!client) {
    res.status(404).send({ message: "Client not found" });
    return;
  }
  res.send(client);
};

module.exports = {
  getClients,
  addClient,
  deleteClient,
  getClientById,
};
