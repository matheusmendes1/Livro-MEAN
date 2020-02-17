let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;

let _idProcurado = new ObjectId('5e49cf4657d073eca0d30e25');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', 
    function(erro, client) {

        if(erro) throw erro;

        let db = client.db('contatooh');

        db.collection('contatos').findOne({ _id: _idProcurado },
            function(erro, contato) {
                if(erro) throw erro;
                console.log(contato);
            }
        )
    });