require('dotenv').config();

const config = {
    //cuando configuras una variable de entorno en windows mete carateres especiales por eso es necesario trim
    dev: process.env.NODE_ENV.trim() !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS
};

module.exports = { config }