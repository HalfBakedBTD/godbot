const active = new Map();
module.exports = async (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  const config = require("../botconfig")
  const Discord = require ("discord.js")
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
