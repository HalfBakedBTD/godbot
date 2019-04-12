const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {
//this is ussles code
	if (!message.member.roles.find(a => a.name === "@everyone")) { 
		message.channel.send('Invalid permissions.');
		return;
	}
    //look in the logs
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: !announce <message>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter('Annoucement.')
        .setDescription(args.join(' '))
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

exports.config = {
    aliases: [ ]
};

module.exports.help = {
  name: "announce"
}
