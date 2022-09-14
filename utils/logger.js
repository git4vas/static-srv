const winston = require("winston");

const logger = winston.createLogger({
    //level: 'info', 
    format: winston.format.simple(),
    //format: winston.format.colorize(), //outputs 'undefined' instead of msgs
    //defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console()
    ],
});

module.exports = logger;