
      .setDescription(`\n${newMember}`)
      .setFooter('v1.1')
                   log.send({embed});
                break;
            case Changes.addedRole:
      embed = new Discord.RichEmbed()
      .setTitle('Role added')
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`User: <@${newMember.user.id}>\n\nRole: <@&${addedRole.id}>`)
      .setFooter('v1.1')
                log.send({embed});
        break;
            case Changes.removedRole:
      embed = new Discord.RichEmbed()
      .setTitle('Role removed')
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`User: <@${newMember.user.id}>\n\nRole: <@&${removedRole.id}>`)
      .setFooter('v1.1')
                log.send({embed});
                break;
            case Changes.username:
      embed = new Discord.RichEmbed()
      .setTitle('Username changed')
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`User: ${newMember}`)
      .addField('**Before:**', `\`\`\`css\n\${oldMember.user.username}#${oldMember.user.discriminator}\`\`\``, true)
      .addField('**After:**', `\`\`\`css\n\${newMember.user.username}#${newMember.user.discriminator}\`\`\``, true)
      .setFooter('v1.1')
           log.send({embed});
                break;
            case Changes.nickname:
      embed = new Discord.RichEmbed()
      .setTitle('Nickname changed')
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`User: <@${newMember.user.id}>`)
      .addField('**Before:**', `${oldMember.nickname}`, true)
      .addField('**After:**', `${newMember.nickname}`, true)
      .setFooter('v1.1')
           log.send({embed});
                break;
            case Changes.avatar:
      embed = new Discord.RichEmbed()
      .setTitle('Avatar changed')
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`User: <@${newMember.user.id}>`)
      .addField('**Before:**', `[link](${oldMember.user.avatarURL})`, true)
      .addField('**After:**', `[link](${newMember.user.avatarURL})`, true)
      .setFooter('v1.1')
      log.send({embed});
                break;
        }
    }
  });
​
​
​
} // ........
