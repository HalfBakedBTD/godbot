const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
//message.reply(`here are my commands:\n\n📄 **help** - shows help message.\n! **prefix** - lets you make a  server prefix.\n!\n\n🔨 **ban** - bans a user in the server.\n! **kick** - kicks a user easily.\n! **mute** - mutes a member disabling chatting.\n🖌\n! **warn** - warns a user. (More warnings = more punishments such as mute)\n🕯 
  let botEmbed = new Discord.RichEmbed()
    .setColor('#fff200')
      message.channel.send(botEmbed);
}

module.exports.help = {
  name: "help"
}
