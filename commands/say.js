
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(`I want to say:\n\`\`\`${sayMessage}\`\`\``);

}

module.exports.help = {
  name: "say"
}
