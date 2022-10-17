
const {SlashCommandBuilder} = require("@discordjs/builders");
const { Interaction, MessageEmbed } = require("discord.js");

module.exports.data = new SlashCommandBuilder()
.setName("doxx")
.setDescription("shows doxx ceritificate")


module.exports.run = async (bot, interaction) =>
{
    try
    {      
        const raffleEmbed = new MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/949865839207804938/1012257406123790347/Screen_Shot_2022-08-25_at_2.05.17_pm.png?width=858&height=656")
        .setColor("DARK_ORANGE")

    
        return interaction.editReply({
            embeds: [ raffleEmbed ], ephemeral: false
        })
    }
    catch(err)
    {
        console.log(err)
    }
}

        //   else  if (commandpre == "doxx") {
        //     const raffleEmbed = new Discord.MessageEmbed()
        //     .setImage("https://media.discordapp.net/attachments/949865839207804938/1012257406123790347/Screen_Shot_2022-08-25_at_2.05.17_pm.png?width=858&height=656")
        //     return message.reply({ embeds: [raffleEmbed] })
        // }
