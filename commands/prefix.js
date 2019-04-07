const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("NOPE.");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage:.setprefix <What prefix Do You Want?>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  //let sEmbed = new Discord.RichEmbed()
  //.setColor("#FF9900")
  //.setTitle("Set Prefix!")
  //.setDescription(`Set to ${args[0]}`);

  message.channel.send(`Prefix has been set to \`${args[0]}\`.`);

}

module.exports.help = {
  name: "set prefix"
}
