module.exports = (app) => {
    const controller = app.controllers.contatoController;

    app
        .route('/contatos') 
        .post(controller.saveContact)
        .get(controller.contactsList);
    
    app
        .route('/contatos/:id')
        .get(controller.getContact)
        .delete(controller.removeContact);
}