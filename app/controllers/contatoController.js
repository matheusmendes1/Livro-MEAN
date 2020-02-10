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

    return controller;
};