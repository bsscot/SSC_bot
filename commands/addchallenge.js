const { SlashCommandBuilder } = require("@discordjs/builders");
const { Interaction, MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require("discord.js");
const { User } = require("../utils/schemas");
const { Unique } = require("../utils/unique");
const { Global } = require("../utils/global");
const prettyMilliseconds = require('pretty-ms');

module.exports.data = new SlashCommandBuilder()
  .setName("addchallenge")
  .setDescription("Add a FCFS challenge for coins")
  .addStringOption(
    option => option
    .setName("name")
    .setDescription(" one word (ex. skunkclub), members use !skunkclub to win the prize")
    .setRequired(true)
)
  .addIntegerOption(
    option => option
      .setName("coins")
      .setDescription("Enter the amount of coins for people to win")
      .setRequired(true)
  )
  .addIntegerOption(
    option => option
      .setName("count")
      .setDescription("How many people can claim?")
      .setRequired(true)
  )




module.exports.run = async (bot, Interaction, options) => {
  try {
    let user_of = Interaction.member;
    if (!user_of.permissions.has("MANAGE_ROLES") && user_of.user.id != "303604936522989578" && user_of.user.id != "328719626525736971") return Interaction.editReply({ content: "You don't have the permission to use this command!", ephemeral: true })

    const coins = Interaction.options.getInteger("coins")
    const count = Interaction.options.getInteger("count")
    const name = Interaction.options.getString("name")
    const check = await Global.findOne({ var: `c${name.toLowerCase()}`})
    if(check == null)
    {
    const globalvar = new Global({ var: `c${name.toLowerCase()}`})
    
    globalvar.amount_ch = coins
    globalvar.counter_ch = count
    globalvar.winners_ch = []
    globalvar.save()
    
    return Interaction.editReply({ content: `FCFS challenge have been initiated, inform members to use !${name} to gain the prize` })
    }
    else{
    return Interaction.editReply({ content: "This challenge already exists" })
    }
    
  }
  catch (err) {
    console.log(err)
  }
}