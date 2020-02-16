angular
    .module('contatooh')
    .controller('ContatosController', function($scope, Contato) {

        $scope.filtro = '';
        $scope.contatos = [];
        $scope.mensagem = {texto: ''};

        buscaContatos = () => {

            Contato.query(
                (contatos) => {
                    $scope.contatos = contatos;
                    $scope.mensagem = {};
                },
                (erro) => {
                    $scope.mensagem = { texto: 'Não foi possível obter a lista'};
                    console.log(erro);
                }
            );
        };
        buscaContatos();

        $scope.remove = (contato) => {
            Contato.delete(
                { id: contato._id },
                buscaContatos,
                (erro) => {
                    $scope.mensagem = { texto: 'Não foi possível remover o contato'};
                    console.log(erro);
                })
        }

    });

//$http retorna uma promise