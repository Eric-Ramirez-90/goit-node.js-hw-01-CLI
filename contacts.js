const fs = require('fs').promises;
const path = require('path');
const { uid } = require('uid/secure');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const dataParse = JSON.parse(data);
    console.log(`Number of contacts ${dataParse.length}`);
    console.table(dataParse);
  } catch (err) {
    console.error(err.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const dataParse = JSON.parse(data);
    const findContactById = dataParse.find(
      ({ id }) => id === contactId.toString()
    );
    console.log(findContactById);
  } catch (err) {
    console.error(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const dataParse = JSON.parse(data);

    console.log(`Number of contacts before deletion ${dataParse.length}`);
    console.table(dataParse);

    const deletedContact = dataParse.filter(
      ({ id }) => id !== contactId.toString()
    );

    await fs.writeFile(contactsPath, JSON.stringify(deletedContact), 'utf8');
    console.log(
      `Contact deleted successfully!!!
      Number of contacts after deletion ${deletedContact.length}`
    );
    console.table(deletedContact);
  } catch (err) {
    console.error(err.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const dataParse = JSON.parse(data);
    const newContact = {
      id: uid(20),
      name,
      email,
      phone,
    };
    console.log(`Number of contacts before adding ${dataParse.length} `);
    console.table(dataParse);

    dataParse.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(dataParse), 'utf8');

    console.log(
      `Contact successfully added!!!
      Number of contacts after adding ${dataParse.length} `
    );
    console.table(dataParse);
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
