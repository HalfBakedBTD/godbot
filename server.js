
     console.log("Couldn't find commands.");
   return; 
  }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`); console.log(`${f} loaded!`);
      client.commands.set(props.help.name, props);
      props.config.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
    });
  });
});
​
​
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
​
​
client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find(a => a.name === 'welcome-leave');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Name: ', `${member}`)
      .addField('Welcome!', `Welcome to the server`)
      .addField('User:', "**[" + `${member.id}` + "]**")
      .addField('Your are the newest member', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true )
      .setFooter(`**${member.guild.name}**`)
      .setTimestamp()
​
      channel.send(embed);
});
​
client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find(a => a.name === 'welcome-leave');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Name:', `${member}`)
      .addField('Has Left the Server', ';(')
      .addField('Bye Bye :(', 'We will all miss you!')
      .addField('The server now has', `${member.guild.memberCount}` + " members")
      .setFooter(`**${member.guild.name}**`)
      .setTimestamp()
​
      channel.send(embed);
      
});
​
// This keeps the bot running 24/7
​
require('dotenv').config();
const token = process.env.TOKEN;
client.login(token);
​
app.get('/', function(req, res) {
  res.sendStatus(200);
});
​
app.listen(3000)
console.log('[META][INFO] Started Logger v' + VERSION);

bot.login(TOKEN); //log in to discord

function formatConsoleMessage(message) {
    return message.cleanContent.replace(new RegExp('\n'
