const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
});
});

client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
} catch (err) {
    console.error(err);
}
});

client.login(config.token);