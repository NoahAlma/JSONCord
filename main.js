const Log = require("./lib/log");
const Bot = require("./lib/bot");

Log.info("JSONCord version 1.0.0");

const fs = require("fs");
var stdio = require("stdio");
const commandmanager = require("./core/commands.js");
let bot = new Bot(null);
const config = require("./bot.json");

if (config.settings.debug) {
    Log.warn("Debug mode is on!");
    bot.getClient().on("debug", (d) => Log.debug(d));
}

bot.getClient().on("ready", () => {
    Log.info(`Logged in as ${bot.getClient().user.tag}`);
    if (config.presence.enabled) {
        if (config.presence.type == "playing") {
            bot.getClient().user.setActivity(config.presence.text, {
                type: "PLAYING"
            });
        } else if (config.presence.type == "watching") {
            bot.getClient().user.setActivity(config.presence.text, {
                type: "WATCHING"
            });
        } else if (config.presence.type == "streaming") {
            bot.getClient().user.setActivity(config.presence.text, {
                type: "STREAMING",
                url: config.presence.url
            });
        } else {
            console.error("[ERROR] Unknown welcome message type : " + config.welcome.type);
        }
    }
});


config.commands.forEach(command => {
    commandmanager.registerCommand(command); 
});

commandmanager.initMessageListener(bot.getClient());

var requiredToken = stdio.getopt({
    "token": {key: "token", args: 1, description: "Provide a token.", default: config.settings.token},
});

bot.login(requiredToken.token);
