exports.run = async(client, message, args, level) => {
    const msg = await message.channel.send("Ping?");

    msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Lateny is ${Math.round(client.ping)}ms.`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "ping",
    category: "Miscelaneous",
    description: "Test",
    usage: "ping"
}