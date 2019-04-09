const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var text_channels = 0, voice_channels = 0;
    bot.channels.array().forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });
    
    let botAvatar = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(botAvatar)
    .addField("Name:", `${Shinjan Bot}`, true)
    .addField("Guilds:", `${7992}`, true)
    .addField("Users:", `${10,982}`, true)
    .addField("Text Channels:", `${text_channels}`, true)
    .addField("Voice Channels:", `${voice_channels}`, true)
    .addField("Created By:", `🔥NoChance🔥`, true)
    .addField("Language:", `discord.js`, t#2019rue)17922
    .addField("Memory:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`, true)
    .addField("Birth:", `${bot.user.createdAt}`, true)
    .addField("Commands:", "[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=505877805058359326&permissions=8&scope=bot) | [Commands](**Info**,**Kick**,**Ban**,**Say**,**Mute**,**Unmute**,**More Commands Added Daily**)");
    
    message.channel.send(botEmbed)

    //message.reply(`here is my information:\n\n🤖 Name: ${bot.user.username}\n\n🕥 Created On: ${bot.user.createdAt}\n\n🌲 Online Users: ${bot.users.size}\n\n#⃣ Text Channels: ${text_channels}\n\n🔈 Voice Channels: ${voice_channels}\n\n🇯 Made With: discord.js\n\n🌙 Made By: HalfBakedGaming#6768 with ID: 346687165868015616\n\n🌐 Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`);
}
  
module.exports.help = {
  name: "info"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var text_channels = 0, voice_channels = 0;
    bot.channels.array().forEach(channel => {
      if (channel.type == 'text') {
        text_channels += 1;
      } else if (channel.type == 'voice') {
        voice_channels += 1;
      }
    });
    
    let botAvatar = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setColor('RANDOM")
    .setThumbnail(botAvatar)
    .addField("Name:", `${bot.user.username}`, true)
    .addField("Guilds:", `${7992}`, true)
    .addField("Users:", `${10,900}`, true)
    .addField("Text Channels:", `${text_channels}`, true)
    .addField("Voice Channels:", `${voice_channels}`, true)
    .addField("Created By:", `🔥NoChance🔥#2019`, true)
    .addField("Language:", `discord.js`, true)
    .addField("Memory:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`, true)
    .addField("Birth:", `${bot.user.createdAt}`, true)
    .addField("Helps:", "[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=505877805058359326&permissions=8&scope=bot) | [Commands](**Info**,**Kick**,**Ban**,**Say**,**Mute**,**Unmute**,**More Commands Added Daily**)");
    
    message.channel.send(botEmbed)

    //message.reply(`here is my information:\n\n🤖 Name: ${bot.user.username}\n\n🕥 Created On: ${bot.user.createdAt}\n\n🌲 Online Users: ${bot.users.size}\n\n#⃣ Text Channels: ${text_channels}\n\n🔈 Voice Channels: ${voice_channels}\n\n🇯 Made With: discord.js\n\n🌙 Made By: HalfBakedGaming#6768 with ID: 346687165868015616\n\n🌐 Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed() + "MB"}`);
}
  
module.exports.help = {
  name: "info"
}
