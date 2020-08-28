# JSONCord version 1.0.0

Welcome to JSONCord -- the easy way to make a simple command/response bot using the discord.js library.

How to use:

1. Download the files from this repository
2. Create a file called `bot.json` in the main folder
3. Customize it
4. Run the bot with `node main.js` in a command prompt
5. Enjoy!

Example bot.json file

```json
{
    "general": {
        "token": "myToken",
        "debug": false
    },
    "commands": [{
        "command": "!hello",
        "action": "send_message",
        "message": "Hello!"
    },
    {
        "command": "!hi",
        "action": "send_dm",
        "message": "Hello there."
    }   
],
    "presence": {
        "enabled": true,
        "type": "playing",
        "text": "Hola!"
    }
}```

The `send_message` action will send a message to the same channel and `send_dm` sends a dm to the message author.

Report bugs on this repository! 
