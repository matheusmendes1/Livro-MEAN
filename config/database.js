const mongoose = require('mongoose');

module.exports = (uri) => {

    mongoose.connect(uri);

    mongoose.connection.on('connected', () => {
        console.log(`Mongoose connected on ${uri}`);
    });

    mongoose.connection.on('disconnected', () => {
        console.log(`Mongoose disconnected from ${uri}`);
    });

    mongoose.connection.on('error', () => {
        console.log(`Mongoose with error in ${uri}`);
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose has been disconnected at the end of application');

            //0 significa que a finalização ocorreu sem erros
            process.exit(0);
        })
    })
}