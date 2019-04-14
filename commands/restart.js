const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.author.id === "323940682857185321") return message.channel.send(":x: Only usable by Shinjan Bot Developers.");
    message.channel.send('Stop Abusing Me! Pls?').then(() => {
    process.exit(2);
   });
};

exports.config = {
    aliases: [ ]
};
    
module.exports.help = {
        name: 'restart',
        usage: 'restart',
        description: 'Restarts the bot'
};
