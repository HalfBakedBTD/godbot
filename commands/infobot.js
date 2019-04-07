const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("**Shinjan's Bot Invite Link:**\n\t https://discordapp.com/api/oauth2/authorize?client_id=505877805058359326&permissions=8&scope=bott \n\t  Creator 🔥NoChance🔥#2019")
}

module.exports.help = {
  name: "info"
}
