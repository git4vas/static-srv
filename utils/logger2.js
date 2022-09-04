const winston = require("winston");

/*
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
*/

const _winston = {
    log: function(params){
        console.log(`[${params.level}] ${params.message}`)
    }
};


class Logger {
     
    constructor(){
        const options = {
            //level: 'info', 
            format: winston.format.simple(),
            //defaultMeta: { service: 'user-service' },
            transports: [
                new winston.transports.Console()
            ]
        };
        
        // this._winston = winston.createLogger(options);
        /*
        this._winston = {
            log: function(params){
                console.log(params.level + ":" + params.message)
            }
        };
        */
    }
    
    _log(loglevel, msg){
        //this._winston.log({
        _winston.log({
                message: msg,
            level: loglevel
        })
    }
    
    
    //info: function(msg){ ... }       // TRUЪ
    
    info(msg){
        this._log('info', msg)
    }
    
    warn(msg){
        this._log('warn', msg)
    }
    
    error(msg){
        this._log('error', msg)
    }
    
    debug(msg){
        this._log('debug', msg)
    }

    
    
}


const logger = new Logger()


module.exports = {
    get_logger: function(){
        return logger
        //return new Logger()
    }
}

/*
my_logger = new Logger();
my_logger.info('test2')
//my_logger._winston.info('test2')   // do not call private methods!
*/