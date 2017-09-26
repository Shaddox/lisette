if (process.version.slice(1).split(".")[0] < 8)
    throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");

require("./modules/functions.js")(client);

client.on("ready", () => {
    console.log("I am ready!");
});

client.commands = new Enm

const init = async () => {
  const cmdFiles = await readdir("./commands");
  client.log('benis xd');

};

client.login(config.token);