let contacts = [
    { 
        _id: 1,
        nome: 'Contato Exemplo 1',
        email: 'cont1@empresa.com.br'
    },
    { 
        _id: 2,
        nome: 'Contato Exemplo 2',
        email: 'cont2@empresa.com.br'
    },
    { 
        _id: 3,
        nome: 'Contato Exemplo 3',
        email: 'cont3@empresa.com.br'
    },
];

let ID_CONTATO_INC = 3;

module.exports = () => {
    const controller = {};

    controller.contactsList = (req, res) => {
        res.json(contacts);
    };

    controller.getContact = (req, res) => {

        // O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

        let contactId = req.params.id;
        let contact = contacts.filter((contact) => {
            return contact._id == contactId;
        })[0];

        contact ? res.json(contact) : res.status(404).send('Contact not found');
    };

    controller.removeContact = (req, res) => {

        let contactId = req.params.id
        contacts = contacts.filter((contact) => {
            return contact._id != contactId;
        })

        res.status(204).end();
    };

    controller.saveContact = (req, res) => {

        let contact = req.body;
        contact = contact._id ? _updateContact(contact) : _addContact(contact);

        res.json(contact);
    };

    _addContact = (newContact) => {

        newContact._id = ++ID_CONTATO_INC;
        contacts.push(newContact);

        return newContact;
    }

    _updateContact = (contactToUpd) => {

        contacts = contacts.map( (contact) => {
            if(contact._id == contactToUpd._id) contact = contactToUpd;
            return contact;
        });

        return contactToUpd;
    }

    return controller;
};