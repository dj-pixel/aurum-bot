const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
    console.log(Message.author.tag + " used command `wiki`")

    const wikiEmbed = new MessageEmbed()
    .setTitle("Fandom Wiki Page")
    .setDescription("You can find our official wiki page [here](https://aurumleaf.fandom.com/wiki/Aurumleaf_Minecraft_Server_Wiki)")
    .setFooter("Generated by " + Client.user.tag)
    .setColor(0xf6bf54)
    .setTimestamp()

Message.channel.send({ embeds: [wikiEmbed] });
}

exports.config = {
name: "wiki",
aliases: [""],
}