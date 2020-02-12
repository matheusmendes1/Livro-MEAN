const http = require('http');
const app = require('./config/express')();

http
    .createServer(app)
    .listen(app.get('port'), () => {
        console.log(`Express Server running on port ${app.get('port')}`);
    });

// Lembrar de rodar o 'npm install nodemon -g' e o 'npm install bower -g' além do npm install, num novo projeto.