const {SlashCommandBuilder} = require("@discordjs/builders");
const { MessageEmbed, MessageButton, Modal, SelectMenuComponent, TextInputComponent, TextInputStyle, Discord, MessageActionRow } = require("discord.js");
//const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');
const { User } = require("../utils/schemas");
const { Quest } = require("../utils/quest");
const { Global } = require("../utils/global");

module.exports.data = new SlashCommandBuilder()
.setName("verify")
.setDescription("Post a verify message")



module.exports.run = async (bot, Interaction, options) =>
{
    try
    {
    let user_of = Interaction.member;
    if(!user_of.permissions.has("MANAGE_ROLES") && user_of.user.id != "303604936522989578" && user_of.user.id != "328719626525736971") return Interaction.editReply({content: "You don't have the permission to use this command!", ephemeral: true})
    
    var quest_ch = bot.channels.cache.find(channel => channel.id === `937994322173894687`);
    if(Interaction.channel.id != "937994322173894687") return Interaction.editReply({content: `You can only use this command in ${quest_ch}`})
    

    const emoji_is = Interaction.guild.emojis.cache.find(emoji => emoji.name === 'BREWTOKEN')


    const verify = new MessageEmbed()
    .setTitle(`__VERIFY__:`)//raid num
    .setDescription(`Please press the button below to verify and enter the server`)
    .setColor("GREEN")
    //.setThumbnail(user.displayAvatarURL())

    
    var row = new MessageActionRow()
    .addComponents(
        [
            new MessageButton()
            .setLabel('Verify Now!')
            .setStyle('SUCCESS')
            .setCustomId(`verify-1-2-3`)
            .setEmoji(`${emoji_is}`)
        ])
    


    await Interaction.editReply({
        embeds: [ verify ],  components: [row]
    });
    return;
    }
    catch(err)
    {
        console.log(err)
    }
}

// const mans = Interaction.member.nickname
// const check2 = Interaction.member.user.username
// return Interaction.editReply({content: `${mans.includes("SSC") || check2.includes("SSC")}`});

module.exports.button = async (bot, interaction, user, action, another_user) => {
    try{
        //const oneplusrole = interaction.guild.roles.cache.find(r => r.id == "943042953713164368")
        let role = interaction.guild.roles.cache.find(r => r.name === 'Brewer');
        
        if (!interaction.member.roles.cache.has(role.id))
        {
            interaction.member.roles.add(role)
            await interaction.editReply({
                     content: "Congrats! You've been verified!"
                });
                return;
        }
        else{
            await interaction.editReply({
                     content: "You're already verified!"
                });
            return;
        }
    }
    catch(err)
    {
        console.log(err)
    }
}



// if (member.roles.cache.has(role.id))
//                         {
//                             //console.log("has the role")
//                             inv_data_two.added.push(`${inv_data_two.invited[i]}`)
//                             user_data_two.wallet += 300
//                             user_data_two.markModified('wallet')
//                             inv_data_two.markModified('added')
//                             inv_data_two.save()
//                             user_data_two.save()
//                         }
//                         //console.log("we're in should get extra")
//                     } 
//                 }
//             }
//             if( inv_data_two.added.length != 0)
//             {  
//             for (var k = 0; k < (inv_data_two.added.length); k++)
//             {
//                 let guild = interaction.guild
//                 var user_det = guild.members.cache.get(`${inv_data_two.added[k]}`, true);
//                 invite_embed
//                 .addField(`**${(k+1)}**`, `${user_det}`)

//             }
//             }

          
//             if (inv_data_two.added.length == 5 || inv_data_two.added.length > 5)
//             {
//                 if (!interaction.member.roles.cache.has("943042953713164368"))
//                 {
//                     const oneplusrole = interaction.guild.roles.cache.find(r => r.id == "943042953713164368")
//                     interaction.member.roles.add(oneplusrole)