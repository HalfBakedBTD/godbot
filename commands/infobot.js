const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("**Shinjan's Bot Invite Link:**\n\t https://discordapp.com/api/oauth2/authorize?client_id=505877805058359326&permissions=8&scope=bott \n\t  Creator: 🔥NoChance🔥#2019\n\t**Help:**\n\t **Ban** .ban Omni\n\t **Kick** .kick omni\n\t **Uptime** .uptime\n\t**info** .info\n\t ``Information For Shinjan Bot``")
}

module.exports.help = {
  name: "info"
}
