const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {



message.delete();

  
if(!args.join(" ")){
  return message.channel.send(":x: " + "|`Your Really Stupid`|")
}
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(args.join(" "))

message.channel.send(embed);
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "say"
}
