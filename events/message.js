const active = new Map();
module.exports = async (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  const config = require("../botconfig")
  const Discord = require ("discord.js")
  const db = require('quick.db');
  const prefixes = new db.table('PREFIXES');
  const logchannels = db.table("LOGCHANNEL");
  const swearWords = ['shit', 'fuck', 'bitch', 'nigger', 'nigga', 'cunt', 'whore', 'fag', 'faggot', 'dick', 'cock', 'pussy', 'slut', 'bastard', 'fuck you'];
  if (config.swearfilter == true) {
    if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
      message.delete().catch(O_o => {});

      let embed = new Discord.RichEmbed()
        .setTitle('Swear Word Detected')
        .setColor("RED")
        .setDescription(`${message.author}, you can't say that. Keep saying that you'll be warned`);
      message.channel.send(embed).then(message => message.delete(10000));
      return;
    }
  };

  // Bot Mention Embed
  if(message.content.toLowerCase() === '<@552705628741566475>'){
    let embed = new Discord.RichEmbed()
    .setTitle("ShinjanBot")
    .addField("Prefix", `\`. \``, true)
    .addField("Help", '...')
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(`RANDOM`);
    message.channel.send(embed);
  };

  
  var prefix = await prefixes.fetch(`${message.guild.id}`);
  if(!prefix) {
    prefixes.set(`${message.guild.id}`, "!");
    prefix = '!'
  }
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

  let ops = {
    active: active
  };
  
  this.config = require('../botconfig');
    message.globalAdmin = !!this.config.owners.includes(message.author.id);
  
   // Our standard argument/command name definition.
    // Our standard argument/command name definition.
   let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  if (cmd) {
    cmd.run(client, message, args, ops);
  }
};
