/* The responsibility of the module will be to return a configured instance of Express */
//const home      = require('../app/routes/homeRoute');
const express    = require('express');
const load       = require('express-load');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    // Env variables
    app.set('port', 3000);

    // Middleware
    app.use(express.static('./public'));

    // Middleware
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    load('models', { cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}