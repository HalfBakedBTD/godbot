exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (reason.length < 1) return message.reply('You must have a reason for the unban.');
  if (!user) return message.reply('You must supply a user id.').catch(console.error);
  message.guild.unban(user); return message.reply ('User has been unbanned. Are you sure?')
};

exports.config = {
    aliases: [ ]
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
