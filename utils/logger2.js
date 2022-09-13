const Winston = require("winston");

const options4console = {
    //level: 'info', 
    format: Winston.format.simple(),
    //defaultMeta: { service: 'user-service' },
    transports: [
        new Winston.transports.Console()
    ]
};

options = options4console;

const winstonLogger = Winston.createLogger(options);

class Logger {
     
    constructor(){
        // empty
    }
    
    _log(loglevel, msg){
        winstonLogger.log({
            message: msg,
            level: loglevel
        })
    }
    
    
    //info: function(msg){ ... }       // TRUЪ syntax
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

// module.exports = new Logger()

const logger = new Logger()

module.exports = {
    //getLogger: () => { return logger }
    getLogger: function(){
        return logger
    }
}
