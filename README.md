# JSONCord version 1.0.0

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")

<img src="https://camo.githubusercontent.com/926d8ca67df15de5bd1abac234c0603d94f66c00/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6e747269627574696f6e732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c6174" alt="contributions welcome" data-canonical-src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" style="max-width:100%;">


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
}
```

The `send_message` action will send a message to the same channel and `send_dm` sends a dm to the message author.

Other actions for commands include:

`give_role` - adds a role to the message author
`remove_role` - removes a role from the message author
`alternate_role` - if the message author has a role, it will take it from them; if not, the bot will give it to them

For each of the these 3 role actions there is a `role_id` JSON line that will take the role ID.

For example:

```json
{
    "command": "!giveMeRole",
    "action": "give_role",
    "role_id": "123456789012345678"
}
```

You can also use `presence` to give your bot a presence.

Options for the type:

`playing`
`watching`
`streaming`

For the `streaming` type, you may add another JSON line called `url`.
Example:

```json
"presence": {
    "enabled": true,
    "type": "watching",
    "text": "JSONCord",
    "url": "https://www.twitch.tv/ninja"
}
```
    

Report bugs on this repository! 


