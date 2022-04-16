require('./patcher')  // Llamas este módulo que modifica el objeto instanciado 
const logger = require('./logger')  // Al llmar el módulo en logger.js te dará el objeto modificado

logger.customMessage()