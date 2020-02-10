module.exports = (app) => {
    const controller = app.controllers.contatoController;

    app.get('/contatos', controller.contactsList);
    app.get('/contatos/:id', controller.getContact);
}