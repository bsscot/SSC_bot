const {SlashCommandBuilder} = require("@discordjs/builders");
const { Interaction, MessageEmbed } = require("discord.js");
const { User } = require("../utils/schemas");

module.exports.data = new SlashCommandBuilder()
.setName("balance")
.setDescription("Check your or another user's balance")
.addUserOption(
    option => option
    .setName("user")
    .setDescription("User whose balance you want to check:")
)

module.exports.run = async (bot, interaction) =>
{
    try
    {
    var brew = bot.channels.cache.find(channel => channel.id === `1002582804879659018`);
    var CongratsWinner = bot.channels.cache.find(channel => channel.id === `1002622934592016394`);
    if(interaction.channel.id != "1002582804879659018" && interaction.channel.id != "1002622934592016394") return interaction.editReply({content: `You can only use this command in ${CongratsWinner} or ${brew}`})
    const user = interaction.options.getUser("user") || interaction.member.user
    const userData = await User.findOne({id: user.id}) || new User({id: user.id})
    let guild = interaction.guild
    const emoji_is = interaction.guild.emojis.cache.find(emoji => emoji.name === 'BREWTOKEN')
      //guild.emojis.cache.get("1001387657424805909");
    const balanceEmbed = new MessageEmbed()
    .setTitle(`${user.username}'s balance`)
    .setDescription("Note: wallet details of requested user")
    .setColor("YELLOW")
    .setThumbnail(user.displayAvatarURL())
    .addField("• Wallet", `${emoji_is} ${userData.wallet}`, true) //` ${emoji_is}**\` ${userData.wallet} $SKNK\`**`, true)
    // .addField("• Solana", `**\` ${userData.bank} 🪙 \`**`, true)
    
    return interaction.editReply({
        embeds: [ balanceEmbed ], ephemeral: false
    })
    }
    catch(err)
    {
        console.log(err)
    }
}