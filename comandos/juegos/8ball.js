module.exports = (client, message, args) => {

    const Discord = require('discord.js');

    let mensaje = args.slice().join(" ")
    if (!mensaje) return message.channel.send("Hazme una pregunta.");
    let respuestas = ["En mi opinión, si", "Es cierto", "Probablemente", "Buen pronóstico", "Todo apunta a que si", "Sin duda", "Si", "Si, definitivamente", "Debes confiar en ello", "Respuesta vaga, vuelve a intentarlo", "Pregunta en otro momento", "Sera mejor que no te lo diga ahora", "No puedo predecirlo ahora", "Concentrate y vuelve a preguntar", "Puede ser", "No cuentes con ello", "Mi respuesta es no", "Mis fuentes me dicen que no", "Las perspectivas no son buenas", "Muy dudoso", "No"]
    const ball = new Discord.MessageEmbed()
        .setColor(3447003)
        .setFooter("8Ball", client.user.avatarURL())
        .setTitle(`A la pregunta \`${mensaje}\`, de \`${message.author.username}\``)
        .setDescription(`Mi respuesta es: ${respuestas[(Math.floor(Math.random() * respuestas.length))]}.`)
    message.channel.send({ embed: ball })

}