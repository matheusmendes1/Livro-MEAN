const mongoose = require('mongoose');

module.exports = () => {

    let schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Contato', schema);
};