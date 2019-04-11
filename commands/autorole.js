client.on('guildMemberAdd', member => {
console.log('User' + member.user.tag + 'has joined the server!');

var role = member.guild.roles.find('name', 'ShinjanBot | User');
member.addRole(role);
})
