let Discord = require("discord.js");

module.exports = class Bot {

    /**
     * @param {string|null} token
     */
    constructor(token) {

        this._token = token;
        this._client = new Discord.Client();

    }

    /**
     * @param {string|null} token
     * @return {Promise<string>}
     */
    login(token) {
        return this._client.login(token || this.getToken())
    }

    /**
     * @return {Discord.Client|module:discord.js.Client}
     */
    getClient() {
        return this._client;
    }

    /**
     * @return {string}
     */
    getToken() {
        return this._token;
    }

};
