# rbx-relay

a discord bot for roblox

## features

* can send global commands to roblox servers; the first server to receive the command will execute it.
* has basic authentication

A discord bot that's meant to be used with [rbx-relay](https://github.com/boxyfour/rbx-relay).

## prerequisites

Note that you shouldn't run this on your home computer. Windows systems are annoying to set up Redis on, and if you're sharing access to game with with other collaborators, they're able to view your IP address. Instead, check out solutions like [Oracle Cloud](https://www.oracle.com/cloud/free/), or [Digital Ocean](https://www.digitalocean.com/solutions/.vps-hosting). Then, follow the set-up guide listed later down.

* install [nodejs](https://nodejs.org/en) & the [typescript](https://www.typescriptlang.org/download/) compilers
* have [redis](https://redis.io/downloads/) installed

## usage

create an .env file and fill out the following fields:

* DISCORD_TOKEN (discord bot token)
* GUILDID (the server you'll run the bot in)
* CLIENTID (the discord bot's application id)

clone the repository, and run:

```sh
npm run start
```

Now your http server is up and running! Check out the provided examples in src/commands/polling, and it's simple to set up from there.\

## Important

### Issues

If there are any issues you'd like to report, you can create an issue [here](https://github.com/boxyfour/rbx-bot-relay). Before doing that, though, please go through the common issues in the [web-server repository](https://github.com/boxyfour/rbx-relay/issues).
