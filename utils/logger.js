const winston = require("winston");

module.exports = winston.createLogger({
    //level: 'info', 
    format: winston.format.simple(),
    //format: winston.format.colorize(), //outputs 'undefined' instead of msgs
    //defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console()
    ],
});

//const logger1 = ...       // could use a constant but there's no need to
//module.exports = logger1; // see logger2.js for proper usage of constants
