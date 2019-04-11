const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {
//this is ussles code
	if (!message.member.roles.find(a => a.name === "@everyone")) { 
		message.channel.send('Invalid permissions.');
		return;
	}
    //look in the logs
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: !poll <question>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❌");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

exports.config = {
    aliases: [ ]
};

module.exports.help = {
  name: "poll"
}
