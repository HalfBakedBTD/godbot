const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal! You don't have the perms!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them!");
  let reason = args.join(" ").slice(22);
  
  wUser.send(`You have been warned in ${message.guild.name} for ${reason}`);

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("⚠ WARNING ⚠")
  .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.IJMhXskD06HXmBugmkU_tQHaEE&pid=Api")
  .setDescription(`**Warned User:** <@${wUser.id}>\n**Warned By:** <@${message.author.id}>\n**Warned In:** ${message.channel}\n**Reason:** ${reason}`)
  .setColor("#f5f6fa")

  let warnchannel = message.guild.channels.find(`name`, "zap-logs");
  if(!warnchannel) {
    message.reply("Make a channel named `#logs` to store warning data!");
  } else {
    warnchannel.send(warnEmbed);
  }
  message.channel.send(warnEmbed);

  //warnchannel.send(`⚠ WARNING ⚠\n\nWarned User: <@${wUser.id}>\n\nWarned By: <@${message.author.id}>\n\nWarned In: ${message.channel}\n\nWarns for ${wUser}: ${warns[wUser.id].warns}\n\nReason: ${reason}`);

  

}

module.exports.help = {
  name: "warn"
}
