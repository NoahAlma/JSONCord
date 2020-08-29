/* 

MISC MODIFICATIONS

For miscellaneous stuff - mostly things that don't belong anywhere else

Please use switch/case if you contribute

*/


module.exports = class miscMod {
    /**
     * @param {Discord.Client} client 
     */
    static handle(client) {

        const config = require("../bot.json")

        client.on("message", msg => {});
    }
}
