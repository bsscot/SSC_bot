const {SlashCommandBuilder} = require("@discordjs/builders");
const { Interaction, MessageEmbed } = require("discord.js");
const { User } = require("../utils/schemas");
const prettyMilliseconds = require('pretty-ms');

module.exports.data = new SlashCommandBuilder()
.setName("work")
.setDescription("Complete your quest for coins");

var job = [
    "👨‍⚕️ Brew Master",
    "🧑‍🌾 Brewer",
    "🧑‍✈️ Brew Tester",
    "🧑‍🔬 Scientist",
    "👷 Skunk Brew Packer", 
    "💂 Guard", 
    "🧑‍🏭 Factory Worker",
    "🧑‍🔧 Technician"
]

var amounts = [
    250,
    200,
    200,
    150,
    100,
    50,
    50,
    50
]

module.exports.run = async (bot, Interaction) =>
{
    try
    {
    var CongratsWinner = bot.channels.cache.find(channel => channel.id === `1002582804879659018`);
    if(Interaction.channel.id != "1002582804879659018") return Interaction.editReply({content: `You can only use this command in ${CongratsWinner}`})
    //only use in brew channel
    const user = Interaction.member.user
    const userData = await User.findOne({ id: user.id }) || new User({ id: user.id })
    
    if (userData.cooldowns.work > Date.now())
        return Interaction.editReply({
            embeds: [
                new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`⌛ You can work again in: **\`${prettyMilliseconds(userData.cooldowns.work - Date.now(), { verbose: true, secondsDecimalDigits: 0 })}\`**`)
            ],
            ephemeral: true
        })

    
    var index = Math.floor(Math.random() * job.length)
    const amount = amounts[index]
    const jobs = job[index]

    userData.wallet += amount
    userData.cooldowns.work = Date.now() + (1000 * 60 * 60 * 1)
    userData.save()

    let guild = Interaction.guild
    const emoji_is = Interaction.guild.emojis.cache.find(emoji => emoji.name === 'BREWTOKEN')
    const workEmbed = new MessageEmbed()
        .setDescription(`You worked as a **\` ${jobs} \`** and earned ${emoji_is} \`${amount} $SKNK\``)
        .setColor("AQUA")

    return Interaction.editReply({ embeds: [workEmbed], ephemeral: false })
    }
    catch(err)
    {
        console.log(err)
    }

}