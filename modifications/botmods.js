/* 

BOT MODIFICATIONS

For mods based on the bot itself (bot information, etc.)

Please use switch/case if you contribute

*/


module.exports = class botMod {
    /**
     * @param {Discord.Client} client 
     */
    static handle(client) {

        const config = require("../bot.json")

        client.on("message", msg => {});
    }
}
