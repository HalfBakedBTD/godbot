const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
   return message.channel.send(":x: " + "| `Please Enter a time period followed by` \■[s] `or` [m] `or` [h]\■");
  }

  if(args[0] <= 0){
   return message.channel.send(":x: " + "| `Please Enter a time period followed by` \■[s] `or` [m] `or` [h]\■");
  }
  
  message.channel.send(":clock1: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` **The Timer Has FINISHED!, it lasted**: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}
exports.config = {
    aliases: [  ]
};
module.exports.help = {
    name: "timer"
}
