var config = require("../bot.json");
let Log = require("../lib/log");

var commandlist = [];

module.exports = {
    /** 
     * @param {Discord.Client|module:discord.js.Client} client
     */
    initMessageListener: function (client) {
        client.on("message", msg => {
            commandlist.forEach(command => {
                if (msg.content == command.command) {
                    switch (command.action) {
                        case "send_message":
                            msg.channel.send(command.message);
                            break;
                        case "send_dm":
                            msg.author.send(command.message);
                            break;
                        case "alternate_role":
                            if (msg.channel.type == "dm") return;
                            if (msg.guild.roles.cache.get(command.role_id)) {
                                if (!msg.member.roles.cache.has(command.role_id)) {
                                    msg.member.roles.add(msg.guild.roles.cache.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.cache.get(command.role_id).name + " has been added to " + msg.author.username);
                                } else {
                                    msg.member.roles.remove(msg.guild.roles.cache.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.cache.get(command.role_id).name + " has been removed to " + msg.author.username);
                                }
                            } else {
                                Log.error("Command: " + command.command + " - This role doesn't exist!");
                            }
                            break;
                        case "give_role":
                            if (msg.channel.type == "dm") return;
                            if (msg.guild.roles.cache.get(command.role_id)) {
                                if (!msg.member.roles.cache.has(command.role_id)) {
                                    msg.member.roles.add(msg.guild.roles.cache.get(command.role_id));
                                    Log.info("Role " + msg.guild.roles.cache.get(command.role_id).name + " has been added to " + msg.author.username);
                                } else {
                                    msg.channel.send("You already have this role.")
                                }
                            } else {
                                Log.error("Command: " + command.command + " - This role doesn't exist!");
                            }
                            break;
                        case "remove_role":
                            if (msg.channel.type == "dm") return;
                            if (msg.guild.roles.cache.get(command.role_id)) {
                                if (msg.member.roles.cache.has(command.role_id)) {
                                    msg.member.roles.remove(msg.guild.roles.cache.get(command.role_id));
                                    Log.info("Role " + msg.guild.roles.cache.get(command.role_id).name + " has been removed to " + msg.author.username);
                                } else {
                                    msg.channel.send("You do not have this role.");
                                }
                            } else {
                                Log.error("Command: " + command.command + " - This role doesn't exist!");
                            }
                            break;
                        default:
                            break;
                    }
                }
            });
        });
    },

    /**
     * @param {string} command 
     */
    registerCommand: function (command) {
        commandlist.push(command);
        Log.info("Command " + command.command + " has loaded.");
    },
}
