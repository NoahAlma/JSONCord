const Log = require("./lib/log");
const Bot = require("./lib/bot");

Log.info("JSONCord version 1.0.0");

const fs = require("fs");
const mods = "./modifications/";
var stdio = require("stdio");
const commandmanager = require("./core/commands.js");
let bot = new Bot(null);
const config = require("./bot.json");

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
            console.error("An unknown error occured.");
        }
    }

    fs.readdir(mods, (err, files) => {
        files.forEach(file => {
            if(file.endsWith(".js")){
                Log.info(`Registered mods - ${file}`);
                require(mods+file).handle(bot.getClient());
            }
        });
    })
});


config.commands.forEach(command => {
    commandmanager.registerCommand(command); 
});

commandmanager.initMessageListener(bot.getClient());

var requiredToken = stdio.getopt({
    "token": {key: "token", args: 1, description: "Provide a token.", default: config.settings.token},
});

bot.login(requiredToken.token);
