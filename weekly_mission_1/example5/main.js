const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')

/* 
    También puede instanciar uno nuevo de esta manera: 
    cosnt customLogger = new logger.constructor('CUSTOM')
    customLogger.log('This is an informational message')
*/