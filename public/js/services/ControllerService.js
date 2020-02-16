angular
    .module('contatooh')
    .factory('Contato', function($resource) {
        //Aqui continua no plural pois é a rota do lado do servidor
        return $resource('/contatos/:id');
    });