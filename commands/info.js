const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("**Shinjan Bot's Invite Link:**\n\t : link:https://discordapp.com/api/oauth2/authorize?client_id=505877805058359326&permissions=8&scope=bot')
}

module.exports.help = {
  name: "info"
}
