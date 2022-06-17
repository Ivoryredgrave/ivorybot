const Discord = require('discord.js');
const client = new Discord.Client();

let { readdirSync } = require('fs');

client.config = require('./config.js');

client.comandos = new Discord.Collection();

// <-- CONTROLADOR DE COMANDOS: -->

for (const file of readdirSync('./comandos/informacion')) {

  if (file.endsWith(".js")) {

    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./comandos/informacion/${file}`);

    client.comandos.set(fileName, fileContents);
  }
}

for (const file of readdirSync('./comandos/utiles')) {

  if (file.endsWith(".js")) {

    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./comandos/utiles/${file}`);

    client.comandos.set(fileName, fileContents);
  }
}

for (const file of readdirSync('./comandos/juegos')) {

  if (file.endsWith(".js")) {

    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./comandos/juegos/${file}`);

    client.comandos.set(fileName, fileContents);
  }
}

// <-- CONTROLADOR DE EVENTOS: -->

for (const file of readdirSync('./eventos/')) {

  if (file.endsWith(".js")) {

    let fileName = file.substring(0, file.length - 3);

    let fileContents = require(`./eventos/${file}`);

    client.on(fileName, fileContents.bind(null, client));

    delete require.cache[require.resolve(`./eventos/${file}`)];
  }
}

// <-- PROPIEDAD LOGIN: -->

client.login(client.config.token)
  .then(() => {
    console.log(`Estoy listo, soy ${client.user.tag}`);

  })
  .catch((err) => {

    console.error("Error al iniciar sesión: " + err);

  });