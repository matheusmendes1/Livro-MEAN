angular
    .module('contatooh')
    .controller('ContatoController', function($scope, $routeParams, Contato) {

        $scope.contato = new Contato();

        if($routeParams.contatoId){
            Contato.get(
                { id: $routeParams.contatoId },
                (contato) => {
                    $scope.contato = contato;
                },
                (erro) => {
                    $scope.mensagem = {
                        texto: 'It was not possible to get the contact'
                    };
                    console.log(erro);
                }
            )
        }

        $scope.salva = () => {
            $scope.contato
                .$save()
                .then(() => {
                    $scope.mensagem = { texto: 'Save successfully' };
                    $scope.contato = new Contato();
                })
                .catch((erro) => {
                    $scope.mensagem = { texto: 'It was not possible to save the contact' };
                    console.log(erro);
                })
        };
    });