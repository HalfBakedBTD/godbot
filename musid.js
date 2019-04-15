const yourID = "323940682857185321"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "!selfrole"
const initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const embedMessage = `
React to the emoji that matches the role you wish to receive.
If you would like to remove the role, simply remove your reaction!
`;
const embedFooter = "Role Reactions"; // Must set this if "embed" is set to true
const roles = ["Artist", "Public Relations", "Intern"];
const reactions = ["😖", "🖌", "😃"];
const embed = true; // Set to "true" if you want all roles to be in a single embed
const embedColor = "BLUE"; // Set the embed color if the "embed" variable is set to true
const botToken = 
 * You'll have to set this up yourself! Read more below:
 * 
 * https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
 */

// Import classes and load client
const { Client, RichEmbed } = require('discord.js');
const client = new Client({ disableEveryone: true });
client.login(botToken);

// If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

// Function to generate the role messages, based on your settings
function generateMessages() {
    let messages = [];
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}

// Function to generate the embed fields, based on your settings and if you set "const embed = true;"
function generateEmbedFields() {
    return roles.map((r, e) => {
        return {
            emoji: reactions[e],
            role: r
        };
    });
}

// Client events to let you know if the bot is online and to handle any Discord.js errors
client.on('error', console.error);

// Handles the creation of the role reactions. Will either send the role messages separately or in an embed
client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD) {

        if (!embed) {
            message.channel.send(initialMessage);

            const toSend = generateMessages();
            toSend.forEach((role, react) => {
                message.channel.send(role).then(m => {
                    m.react(reactions[react]);
                });
            });
        } else {
            const roleEmbed = new RichEmbed()
                .setDescription(embedMessage)
                .setFooter(embedFooter);

            if (embedColor) roleEmbed.setColor(embedColor);

            const fields = generateEmbedFields();
            for (const f of fields) roleEmbed.addField(f.emoji, f.role, true);

            message.channel.send(roleEmbed).then(async m => {
                for (let r of reactions) await m.react(r);
            });
        }
    }
});

// This makes the events used a bit more readable
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

// This event handles adding/removing users from the role(s) they chose
client.on('raw', async event => {

    if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;
    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id);

    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);

    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    const reaction = message.reactions.get(emojiKey);

    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;

    if (message.author.id === client.user.id && (message.content !== initialMessage || (message.embeds[0] && (embedFooterText !== embedFooter)))) {

        if (!embed) {
            const re = `\\*\\*"(.+)?(?="\\*\\*)`;
            const role = message.content.match(re)[1];

            if (member.id !== client.user.id) {
                const roleObj = message.guild.roles.find(r => r.name === role);

                if (event.t === "MESSAGE_REACTION_ADD") {
                    member.addRole(roleObj.id);
                } else {
                    member.removeRole(roleObj.id);
                }
            }
        } else {
            const fields = message.embeds[0].fields;

            for (let i = 0; i < fields.length; i++) {
                if (member.id !== client.user.id) {
                    const role = message.guild.roles.find(r => r.name === fields[i].value);

                    if (fields[i].name === reaction.emoji.name) {
                        if (event.t === "MESSAGE_REACTION_ADD") {
                            member.addRole(role.id);
                            break;
                        } else {
                            member.removeRole(role.id);
                            break;
                        }
                    }
                }
            }
        }
    }
});
