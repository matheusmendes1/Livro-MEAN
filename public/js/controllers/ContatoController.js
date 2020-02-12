angular
    .module('contatooh')
    .controller('ContatoController', function($scope, $routeParams) {

        console.log(`Dado: ${$routeParams.contatoId}`);
    });