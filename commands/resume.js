exports.run = async(bot, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);



    if (!fetched) {

        return message.reply("There is no music currently playing");

    }

    else if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) {

        return message.reply("Sorry you are not in the same voice channel as me");

    }

    else if (fetched.dispatcher.resumed) {

        return message.reply("The music is already playing");

    }

    let queue = fetched.queue;

    let resume = queue[0];



    fetched.dispatcher.resume()

    message.channel.send(`The song has been resumed`)

}



exports.config = {

    aliases: [  ]

};



exports.help = {

    name: 'resume'

}
