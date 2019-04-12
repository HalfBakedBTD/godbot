const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:online:544473534588780554> Online",
        idle: "<:idle:544473534932451338> Idle",
        dnd: "<:dnd:544473533716103180> Do Not Disturb",
        offline: "<:offilne:424890400319340546> Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:bot:559939945419243532> Yes";
  } else {
    bot = "<:coolemoji:559939238095880192> No";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("RANDOM")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<:yes:425632265993846795> Nickname: ${member.nickname}` : "<:no:425632070036094986> None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
                .setFooter(`Userinfo about ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);
    }

module.exports.config = {
aliases: [ ]
};


    module.exports.help = {
        name: "usrinfo"
    }
