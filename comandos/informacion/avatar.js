module.exports = (client, message, args) => {

    const Discord = require('discord.js');

    let miembro = message.mentions.users.first();

    if (!miembro) {
        const embed = new Discord.MessageEmbed()
            .setImage(`${message.author.displayAvatarURL()}`)
            .setColor(3447003)
            .setFooter(`Avatar de ${message.author.tag}`);
        message.channel.send(embed);

    } else {
        const embed = new Discord.MessageEmbed()
            .setImage(`${miembro.displayAvatarURL()}`)
            .setColor(3447003)
            .setFooter(`Avatar de ${miembro.tag}`);

        message.channel.send(embed);

    };

}