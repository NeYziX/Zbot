const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setActivity("/help | Dév' By NeYziX ✨")
});

bot.login(process.env.BOT_TOKEN);
