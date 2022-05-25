module.exports = (client, message, args) => {

    try {
        const { MessageEmbed } = require('discord.js')
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
            .setTitle(`Información del usuario ${user.user.username}`)
            .setColor(3447003)
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                {
                    name: "Apodo: ",
                    value: message.member.nickname ? message.member.nickname : "No tiene apodo",
                    inline: true
                },
                {
                    name: "#️⃣ Tag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: 'Avatar link: ',
                    value: `[Pinche Aquí](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Datos de creación: ',
                    value: user.user.createdAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: 'Fecha de entrada al servidor: ',
                    value: user.joinedAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: 'Roles del usuario: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        message.channel.send(embed)

    } catch (error) {
        message.channel.send('!userinfo no se puede usar en mensajes privados.');
    }
}