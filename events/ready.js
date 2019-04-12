onst Discord = require ("discord.js")


module.exports = bot => {
  console.log('Im Online Now :)')
  //bot.user.setActivity("hello", {type: "LISTENING"});
  
    let statues = [
      `over ${bot.guilds.size} servers || !help`,
      `over ${bot.guilds.size} servers || !set prefix (prefix)`,
      `over ${bot.guilds.size} servers || !changelog`
    ]
    
    setInterval(function() {
    let status = statues[Math.floor(Math.random() * statues.length)]
    bot.user.setActivity(status, {type: "WATCHING"});
  }, 15000)
  
}
client.on('guildMemberAdd', member => {
console.log('User' + member.user.tag + 'has joined the server!');

var role = member.guild.roles.find('name', 'ShinjanBot User | User');
member.addRole(role);
})
