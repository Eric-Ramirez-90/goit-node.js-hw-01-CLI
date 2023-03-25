const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const dataParse = JSON.parse(data);
    console.table(dataParse);
  } catch (error) {
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
    console.table(findContactById);
  } catch (error) {
    console.error(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const dataParse = JSON.parse(data);
    console.log(dataParse);
  } catch (error) {
    console.error(err.message);
  }
}

function addContact(name, email, phone) {
  // ...твій код
}
