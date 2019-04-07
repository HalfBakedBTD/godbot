const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No, Just No.");
  if(!args[0]) return message.channel.send("Use: `!purge <amount of messages to clear>`.\n\nExample: `!purge 10` would purge 10 messages.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(5000));
});


}

module.exports.help = {
  name: "purge"
}
