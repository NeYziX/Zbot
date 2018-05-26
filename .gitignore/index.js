'use strict';
const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setActivity("[/Help] Modération ZDown")
    console.log("Bot Ready !");
});

bot.login(process.env.BOT_TOKEN);

bot.on("guildMemberAdd", member => {
    let role = member .guild.roles.find("name", "Membre");
    member.guild.channels.find("name", "bienvenue").send(`${member}, bienvenue chez ZDown ! :heart:`)
    member.addRole(role)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "départ").send(`${member}, bon vent ! :joy:`)
})

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setColor('#24A493')
            .setAuthor("Commandes du ZBot !", message.guild.iconURL)
            .addField("/help", "Affiche la liste des commandes du bot !")
        message.channel.sendEmbed(embed);
        console.log("Commande Help demandée !");
    }

});

bot.on('message', message => {
    if (message.content === "quel est le travail de la mère a Manu ?"){
        message.reply("La mère a Manu travail en tant que prostitué profesionelle avec des noir ayant une grosse teub");
        console.log('Mere a Manu');
    }

});
