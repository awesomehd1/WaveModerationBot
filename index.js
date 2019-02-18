const Discord = require("discord.js")

const client = new Discord.client();

const config = require("./config.json")

client.on("ready", () => {
    console.log('Bot is running right now! :D')
    client.user.setActivity('Right now I am moderating in ${client.guilds.size} currently')
});

client.on("guildCreate", guild => {
    console.log('New guild joined! ${guild.name}')
});

// Hold on I will test the console log hold on... ~ awesomehd1