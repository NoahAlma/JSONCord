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


