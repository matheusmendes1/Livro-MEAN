/* The responsibility of the module will be to return a configured instance of Express */
const express   = require('express');
const home      = require('../app/routes/homeRoute');
const load      = require('express-load');

module.exports = () => {
    const app = express();

    // Env variables
    app.set('port', 3000);

    // Middleware
    app.use(express.static('./public'));

    // Middleware
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('models', { cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}