const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    if (message.author.id !== "323940682857185321") return message.channel.send("Your not a developer of Shinjan Bot!");
    
    switch(args[0]){
        case 'p': //setting activity to "playing"
        client.user.setActivity(args.splice(1).join(' '), {type: 'playing'});
        message.channel.send('**Playing** status ready.');
        break;
        case 'w': //setting activity to "watching"
        client.user.setActivity(args.splice(1).join(' '), {type: 'watching'});
        message.channel.send('**Watching** status ready.')
        break;
        case 'l': //setting activity to "listening"
        client.user.setActivity(args.splice(1).join(' '), {type: 'listening'});
        message.channel.send('**Listening** status ready.');
        break;
    }
}

module.exports.config = {
    aliases: [ ]
};

module.exports.help = {
  name: 'setgame',
  description: 'Sets the bot\'s playing status.',
  usage: 'setgame <playing status>'
};
