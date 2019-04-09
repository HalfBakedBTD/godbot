const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (args[0]) {
        let command = client.commands.has(args[0]) ? client.commands.get(args[0]) : (client.aliases.has(args[0]) ? client.aliases.get(args[0]) : null);
        if (!command) return;
        const embed = new Discord.RichEmbed()
            .addField(`**${command.help.name.toProperCase()} Command**`, command.help.description)
            .addField('Usage', command.help.usage)
            .setColor("BLUE")
        if (command.help.aliases) {
            if (command.help.aliases.length > 0) embed.addField(`Aliases`, `\`${command.help.aliases.join(", ")}\``);
        }

        message.channel.send(embed);
    } else {
        if (client.config.useNewHelp == "true") {
            var cats = new Map();

            client.commands.forEach(c => {
                if (c.help.enabled == true && c.help.hideHelp == false) {
                    let n = c.help.type.toProperCase();
                    if (!cats.has(n)) {
                        cats.set(n, {
                            name: n,
                            array: []
                        });
                    };
                    cats.get(n).array.push(`\`${c.help.name}\``);
                }
            });

            var embed = new Discord.RichEmbed();
            embed.setTitle(`Commands Info`);
            embed.setDescription(`Use \`!help commandname\` to view help on a command. To see changelogs use \`!changlog\`. For additional help with a command, type \`!help <command name>\`.\nThank you for using Shinjan Bot! We know you will stick with us!`);
            cats.forEach(cat => {
                embed.addField(`**${cat.name}**`, cat.array.join(", "));
            });
            embed.setColor("RA DK ");
            embed.setTimestamp();
            embed.setThumbnail(client.user.displayAvatarURL);
            embed.setFooter(`Created by Evens`);
            message.channel.send(embed).catch((e) => {
                message.channel.send(`Something went wrong! Tell a dev or try again.`);
                console.error(e);
            });
        } else {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
       .addField("**My Commands**"`mute` `kick` `ban` `purge` `say` `unmute` `info`")
             
            message.channel.send(embed)
        }
    }
};

exports.config = {
aliases: [ ]
};

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "util",
    name: "info",
    aliases: ["halp", "commands", "cmds", "h"],
    description: "The `help` command displays a help menu, which contains a list of commands and a way to find further help.",
    usage: "`info"
};
