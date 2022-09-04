const winston = require("winston");

const logger1 = winston.createLogger({
    //level: 'info', 
    format: winston.format.simple(),
    //format: winston.format.colorize(), //outputs 'undefined' instead of msgs
    //defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console()
    ],
});

/*
logger.info = function(message){
    console.log('TEST: ' + message)
};
*/

//function Logger(){
//var Logger = function(){
const Logger = function(){
    
    const options = {
        //level: 'info', 
        format: winston.format.simple(),
        //defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.Console()
        ]
    };

    this._winston = winston.createLogger(options);
}


Logger.prototype = {
    _winston: {},

    /*
    constructor: function(){
        // ...
    },
    */

    _log: function(loglevel, msg){
        this._winston.log({
            message: 'PROTO: ' + msg,
            level: loglevel
        })
    },

    info: function(msg){
        this._log('info', msg)
        //this._logger.info("TEST: " + msg)
    },
    warn: function(msg){
        this._log('warn', msg)
        //this._logger.warn("TEST: " + msg)
    },
    error: function(msg){
        this._log('error', msg)
        //this._logger.error("TEST: " + msg)
    },
    debug: function(msg){
        this._log('debug', msg)
        //this._logger.debug("TEST: " + msg)
    }
}



module.exports = logger1;
//module.exports = new Logger();

/*
module.exports = {
    logger: logger1,
    Logger: Logger
}
*/

/*
my_logger = new Logger();
my_logger.info('test2')
//my_logger._winston.info('test2')   // do not call private methods!
*/