/*

MAIN MODIFICATION FOLDER

Used for messaging (embeds, etc.)

Please use switch/case if you contribute

*/


module.exports = class messageMod {
    /**
     * @param {Discord.Client} client 
     */
    static handle(client) {

        const config = require("../bot.json")

        client.on("message", msg => {
            config.commands.forEach(command => {
                if (msg.content.startsWith(command.command)) {
                    switch (command.action) {
                        case "test":
                            msg.channel.send("Test!")
                            break;
                        default: 
                            break;
                    }
                }
            });
        });
    }
}

/*

JSON example for how this would look:

        {
            "command": "!testing",
            "action": "test"
        }   

Bot would send "Test!" to the channel.

*/
