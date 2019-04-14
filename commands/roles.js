const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {


  var ROLESS = message.guild.roles.array()

  

  var ROLES = "";


    ROLEZZ.forEach(function(element){

        ROLES += element.name + "\n"

    });

    

    message.channel.send("```" + "\n" +

                         "---------------------------------" + "\n" +

                         "SERVER ROLES" + "\n" +

                         "---------------------------------" + "\n" +

                         `${ROLES}` + "```");


}

exports.config = {
    aliases: ['role' ]
};

module.exports.help = {

    name: "roles"

}
