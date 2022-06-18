require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  disableEveryone: true,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.login(process.env.DISCORD_TOKEN ?? "");
  
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const listeningIn = require("./listeningin");

listeningIn.forEach((listener) => {
  client.on(listener.event, listener.handler);
});

module.exports = client;