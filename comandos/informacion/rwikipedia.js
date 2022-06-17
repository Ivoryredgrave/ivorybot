module.exports = (client, message, args) => {

    const Discord = require('discord.js');

    let wiki = new Discord.MessageEmbed()
    .setColor(3447003)
    .setDescription("[¡Pulsa acá para ir a un artículo random de Wikipedia!](http://es.wikipedia.org/wiki/Special:Random)")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/1024px-Wikipedia_svg_logo.svg.png");
    
    message.channel.send(wiki);
    
}