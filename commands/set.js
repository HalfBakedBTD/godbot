const Discord = require("discord.js");
const db = require('quick.db');
const prefixes = new db.table('PREFIXES');
const levelson = new db.table("LEVELSON");
const logchannels = new db.table('LOGCHANNELS');
const events = new db.table("EVENTS");

module.exports.run = async (client,message) => {
client.owners = [client.users.get("323940682857185321")];
  

if(cmd === "logChannel"||cmd === "logs") {
  let channel = message.mentions.channels.first() || message.guild.channels.find(c => c.name.toLowerCase().includes(message.content.slice(prefix.length).slice(2)) && c.type == "text");
  if(!channel) return message.channel.send("oi ... i need the channel, right?");  
  
  const lc = logchannels.fetch(`${message.guild.id}`)
  if(!lc) logchannels.set(`${message.guild.id}`, `${channel.id}`);
  else logchannels.set(`${message.guild.id}`, `${channel.id}`);
  
  message.channel.send(`New logChannel set to: <#${channel.id}>`);
}

 }


exports.config = {
    aliases: [ ]
};

module.exports.help = {
  name: "set"
} // owo uwu
