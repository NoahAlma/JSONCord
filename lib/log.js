let moment = require("moment");

module.exports = class Log {

    /**
     * @param {string} message
     */
    static info(message) {
        Log.out(message, 0);
    }

    static debug(message) {
        Log.out(message, 2);
    }

    static error(message) {
        Log.out(message, 1);
    }

    static warn(message) {
        Log.out(message, 3);
    }

    /**
     * @return {string}
     */
    static prefix() {
        return `[${moment().format("H:mm:ss")}]` + " ";
    }

    /**
     * @param {string} message
     */
    static out(message, type) {
        switch(type) {
            case 0: // Info
                console.log(Log.prefix() + message);
                break;
            case 1: // Error
                console.log(Log.prefix() + message.red);
                break;
            case 2: // Debug
                console.log(Log.prefix() + message.yellow);
                break;   
        }
    }
};
