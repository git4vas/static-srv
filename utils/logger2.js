const Winston = require("winston");

const options = {
    //level: 'info', 
    format: Winston.format.simple(),
    //format: Winston.format.simple(),
    //defaultMeta: { service: 'user-service' },
    transports: [
        new Winston.transports.Console()
    ]
};

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

// module.exports = new Logger()

const logger = new Logger()

module.exports = {
    //get_logger: () => { return logger }
    getLogger: function(){
        return logger
    }
}
