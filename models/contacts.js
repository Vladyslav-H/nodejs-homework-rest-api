const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "/contacts.json");

const writeContacts = async (contacts) => {
  try {
    return await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.log(error.message);
  }
};

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();
    return contacts.find((item) => item.id === id) || null;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (id) => {
  try {
    const contacts = await listContacts();
    const ind = contacts.findIndex((item) => item.id === id);
    if (ind === -1) {
      return null;
    }
    const [removeContact] = contacts.splice(ind, 1);
    await writeContacts(contacts);

    return removeContact;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: v4(), ...body };
    contacts.push(newContact);
    await writeContacts(contacts);
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

const updateContact = async (id, body) => {
  try {
    const contacts = await listContacts();
    const ind = contacts.findIndex((item) => item.id === id);
    if (ind === -1) {
      return null;
    }
    contacts[ind] = { id, ...body };
    await writeContacts(contacts);
    return contacts[ind];
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
