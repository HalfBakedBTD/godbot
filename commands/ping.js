const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let msgping1 = new Date();
    let botping = new Date() - message.createdAt;
    let msgping2 = new Date() - msgping1;
    let pingembed = new Discord.RichEmbed()
        .setColor("BLUE")
        .addField(':heartpulse:API Ping: ', Math.floor(bot.ping) + ' ms ')
        .addField(':robot:Bot Ping: ', Math.floor(botping) + ' ms ')
        .addField('<:oofSmile:558280049413980179>Your Ping: ', new Date().getTime() - message.createdTimestamp + " ms ")
        .setFooter(`Requested by ${message.author.tag}`);
    return message.channel.send(pingembed);
};

exports.config = {
    aliases: [ ]
};

module.exports.help = {
    name: "ping"
};


