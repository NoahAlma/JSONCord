let moment = require("moment");

module.exports = class Log {

    /**
     * @param {string} message
     */
    static info(message) {
        Log.out(message, 0);
    }

    static error(message) {
        Log.out(message, 1);
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
                console.log(Log.prefix() + message + " [ERROR]");
                break;
        }
    }
};
