client.on('guildMemberAdd', member => {
console.log('User' + member.user.tag + 'has joined the server!');

var role = member.guild.roles.find('name', 'RandyPI | User');
member.addRole(role);
})
