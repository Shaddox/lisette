if (process.version.slice(1).split(".")[0] < 8)
    throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
}
});

client.login(config.token);