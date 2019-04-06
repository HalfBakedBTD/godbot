const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal! You don't have the perms!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them!");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("This user can't be warned because he/she has manage messages perms!");
  let reason = args.join(" ").slice(22);

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
  
  wUser.send(`You have been warned in ${message.guild.name} for ${reason}`);

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("⚠ WARNING ⚠")
  .setThumbnail("https://tse2.mm.bing.net/th?id=OIP.IJMhXskD06HXmBugmkU_tQHaEE&pid=Api")
  .setDescription(`**Warned User:** <@${wUser.id}>\n**Warned By:** <@${message.author.id}>\n**Warned In:** ${message.channel}\n**Reason:** ${reason}\n**User Warn Level:** ${warns[wUser.id].warns}`)
  .setColor("#f5f6fa")

  //let warnchannel = message.guild.channels.find(`name`, "zap-logs");
  //if(!warnchannel) return message.reply("Couldn't find logs channel!");

  //warnchannel.send(`⚠ WARNING ⚠\n\nWarned User: <@${wUser.id}>\n\nWarned By: <@${message.author.id}>\n\nWarned In: ${message.channel}\n\nWarns for ${wUser}: ${warns[wUser.id].warns}\n\nReason: ${reason}`);

  warnchannel.send(warnEmbed)

}

module.exports.help = {
  name: "warn"
}
