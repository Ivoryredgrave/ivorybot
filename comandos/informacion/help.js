const Discord = require('discord.js');

module.exports = (client, message, args) => {

  const informacion = new Discord.MessageEmbed()
  informacion.setTitle("Lista de comandos de Ivorybot", message.author.displayAvatarURL());
  informacion.setDescription("¡Hola!, este es un ejemplo de uso: !comando");
  informacion.addField("```+Útiles```", `ping\navatar`, true);
  informacion.addField("```+Información```", `userinfo\nrwikipedia\ncreator\nhelp`, true);
  informacion.addField("```+Juegos```", `8ball`, true);

  informacion.setFooter(`Pedido por ${message.author.tag}`, client.user.avatarURL());
  informacion.setTimestamp();
  informacion.setColor(3447003);

  message.channel.send('**' + message.author.username + '**, revisa tus mensajes privados.');
  message.author.send({ embed: informacion });
}