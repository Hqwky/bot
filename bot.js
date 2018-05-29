const Discord = require('discord.js');
const bot = new Discord.Client();
let xp = ("./xp.json");

bot.on('message', (message) => {

    
    if(message.content == 'ping'){
        //message.reply('pong');
        message.channel.sendMessage('pong!');
    }
    if(message.content == 'h!hello'){
        message.channel.sendMessage('Hi there!');
    }
    if(message.content == 'h!help'){
    let helpEmbed = new Discord.RichEmbed()
        .setDescription("Help Menu")
        .setColor("#7289da")
        .addField("h!userinfo", "Information about you!")
        .addField("h!serverinfo", "Information about the server")
        .addField("h!botinfo", "information about the bot!")
        .addField("ping", "pong!")
        .addField("ding", "dong!");

        return message.channel.send(helpEmbed);
    }
    if(message.content == 'h!botinfo'){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#7289da")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt);

        return message.channel.send(botembed);
    }
    if(message.content == 'h!serverinfo'){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#7289da")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created By", "Hawky#0001")
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }
    if(message.content == 'h!userinfo'){
        let uicon = message.member.displayAvatarURL
        let userembed = new Discord.RichEmbed()
        .setDescription("User Information")
        .setColor("#7289da")
        .setThumbnail(uicon)
        .addField("Username ID", message.member.displayName)
        .addField("Joined At", message.member.joinedAt)
        

        return message.channel.send(userembed);
    }
    if(message.content == 'ding'){
        message.channel.sendMessage('dong!');
    }
    if(message.content == '!rank'){
        message.channel.sendMessage('Test!');
    
    }
    
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Hawky",{type: 2});
})


bot.login('NDUwNjgxODI1MTMyNTQ0MDAw.De4pnA.EIDaxROBHNYB8gXBicAGnZoxDlU');
