const Clients = require("../dto/clients");

class ClientsInfra {
  constructor() {
    this.clients = [];
  }

  getClients() {
    console.log("get all clients");
    return this.clients;
  }

  addClient({ storeName, address, phone }) {
    const id = this.clients.length + 1;
    const client = new Clients(id, storeName, address, phone);
    this.clients.push(client);
    console.log("add: ", client.id, client.storeName);
    return true;
  }

  getClientById(id) {
    console.log("get: ", id);

    const client = this.clients.find((client) => client.id == id);
    console.log("got: ", client);

    if (!client) {
      return false;
    }

    return client;
  }

  editClientById(id, { storeName, address, phone }) {
    console.log("edit: ", id);
    const client = this.getClientById(id);
    if (!client) {
      return false;
    }
    client.storeName = storeName;
    client.address = address;
    client.phone = phone;
    console.log("edited: ", client);
    return true;
  }

  deleteClientById(id) {
    console.log("delete: ", id);
    const initialLength = this.clients.length;
    this.clients = this.clients.filter((client) => client.id != id);
    const isDeleted = this.clients.length < initialLength;
    console.log("deleted: ", isDeleted);
    return isDeleted;
  }
}

module.exports = ClientsInfra;
