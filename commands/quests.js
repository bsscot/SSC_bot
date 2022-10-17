const {SlashCommandBuilder} = require("@discordjs/builders");
const { MessageEmbed, MessageButton, Modal, SelectMenuComponent, TextInputComponent, TextInputStyle, Discord, MessageActionRow } = require("discord.js");
//const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');
const { User } = require("../utils/schemas");
const { Quest } = require("../utils/quest");

module.exports.data = new SlashCommandBuilder()
.setName("quests")
.setDescription("Create a raffle")



module.exports.run = async (bot, Interaction, options) =>
{
    try
    {
    let user_of = Interaction.member;
    if(!user_of.permissions.has("MANAGE_ROLES") && user_of.user.id != "303604936522989578" && user_of.user.id != "328719626525736971") return Interaction.editReply({content: "You don't have the permission to use this command!", ephemeral: true})
    
    var CongratsWinner = bot.channels.cache.find(channel => channel.id === `1004444708338155560`);
    if(Interaction.channel.id != "1004444708338155560") return Interaction.editReply({content: `You can only use this command in ${CongratsWinner}`})
    
    let guild = Interaction.guild
    const emoji_is = Interaction.guild.emojis.cache.find(emoji => emoji.name === 'BREWTOKEN')
    const emoji_ssc = Interaction.guild.emojis.cache.find(emoji => emoji.name === 'EMOJIS7')


    const proof = "1002606456132083732"
    const cf = "1002582906742526073"
    const raffle = "1002606816473141288"
    const ann = "938005431941496832"
    const up = "949865839207804938"
    const sp = "938006416692760607"
    var proof_ch = bot.channels.cache.find(channel => channel.id === proof);
    var cf_ch = bot.channels.cache.find(channel => channel.id === cf);
    var raffle_ch = bot.channels.cache.find(channel => channel.id === raffle);
    var ann_ch = bot.channels.cache.find(channel => channel.id === ann);
    var up_ch = bot.channels.cache.find(channel => channel.id === up);
    var sp_ch = bot.channels.cache.find(channel => channel.id === sp);

    await Interaction.editReply({
        content: "Below are all the quests"
    }).then(message => message.delete());

    const amount1 = 1000
    const quest1 = new MessageEmbed()
    .setTitle(`Quest 1:`)
    .setDescription(`__Rules:__\nUpvote our project drop on MagicEden, then post your proof in ${proof_ch}, once done please wait for the team to approve your proof, then press the button below to check if you've completed it successfully`)
    .setColor("PURPLE")
    //.setThumbnail(user.displayAvatarURL())
    .addField("• Reward", `${emoji_is} ${amount1}`, true)
    .setFooter({text: "Approve Reaction Emoji: 1️⃣"})
    .setThumbnail("https://media.discordapp.net/attachments/934202018799685752/1004631036740780073/unknown.png")


    const row1 = new MessageActionRow()
    .addComponents(
        [
            new MessageButton()
            .setLabel('CONFIRM COMPLETION')
            .setStyle('SUCCESS')
            .setCustomId(`quests-q1-${amount1}-1️⃣`)
            .setEmoji(`${emoji_ssc}`),

            new MessageButton()
            .setLabel('CLICK THIS')
            .setURL("https://magiceden.io/drops/skunksocialclub")
            .setStyle('LINK')
            .setEmoji(`🔗`),
        ])

    await Interaction.followUp({
        embeds: [ quest1 ],  components: [row1]
    });
    
    const check = await Quest.findOne({qst: "1️⃣"})
    if (check == null)
    {
        const quest = await new Quest({qst: "1️⃣"})
        quest.save()
    }



    const amount3 = 250
    const quest3 = new MessageEmbed()
    .setTitle(`Quest 2:`)
    .setDescription(`__Rules:__\nChange your profile picture on discord to a sneakpeek photo then post your proof in ${proof_ch}, once done press the button below to check if you've completed it successfully`)
    .setColor("PURPLE")
    //.setThumbnail(user.displayAvatarURL())
    .addField("• Reward", `${emoji_is} ${amount3}`, true) 
    .setFooter({text: "Approve Reaction Emoji: 2️⃣"})
    .setThumbnail("https://media.discordapp.net/attachments/934202018799685752/1004631230198861844/Screen_Shot_2022-08-03_at_11.05.45_PM.png")

    const row3 = new MessageActionRow()
    .addComponents(
            new MessageButton()
            .setLabel('CONFIRM COMPLETION')
            .setStyle('SUCCESS')
            .setCustomId(`quests-q3-${amount3}-2️⃣`)
            .setEmoji(`${emoji_ssc}`),

        )

    const check2 = await Quest.findOne({qst: "2️⃣"})
    if (check2 == null)
    {
        const quest = await new Quest({qst: "2️⃣"})
        quest.save()
    }

    await Interaction.followUp({
        embeds: [ quest3 ],  components: [row3]//, ephemeral: true
    });

    const amount4 = 250
    const quest4 = new MessageEmbed()
    .setTitle(`Quest 3:`)
    .setDescription(`__Rules:__\nLike and retweet our pinned post, then post your proof in ${proof_ch}, once done please wait for the team to approve your proof, then press the button below to check if you've completed it successfully`)
    .setColor("PURPLE")
    //.setThumbnail(user.displayAvatarURL())
    .addField("• Reward", `${emoji_is} ${amount4}`, true)
    .setFooter({text: "Approve Reaction Emoji: 3️⃣"})
    .setThumbnail("https://media.discordapp.net/attachments/934202018799685752/1004631944497201272/unknown.png")

    const row4 = new MessageActionRow()
    .addComponents(
        [
            new MessageButton()
            .setLabel('CONFIRM COMPLETION')
            .setStyle('SUCCESS')
            .setCustomId(`quests-q4-${amount4}-3️⃣`)
            .setEmoji(`${emoji_ssc}`),

            new MessageButton()
            .setLabel('CLICK THIS')
            .setURL(`https://twitter.com/Skunk_Social`) 
            .setStyle('LINK')
            .setEmoji(`🔗`),
        ])

    const check3 = await Quest.findOne({qst: "3️⃣"})
    if (check3 == null)
    {
        const quest = await new Quest({qst: "3️⃣"})
        quest.save()
    }

    await Interaction.followUp({
        embeds: [ quest4 ],  components: [row4]
    });


    const amount2 = 400
    const quest2 = new MessageEmbed()
    .setTitle(`Quest 4:`)
    .setDescription("__Rules:__\nInclude Skunk Social in your discord name, once done press the button below to check if you've completed it successfully")
    .setColor("PURPLE")
    //.setThumbnail(user.displayAvatarURL())
    .addField("• Reward", `${emoji_is} ${amount2}`, true) 
    .setThumbnail("https://media.discordapp.net/attachments/934202018799685752/1004773644112769095/unknown.png?width=763&height=671")

    const row2 = new MessageActionRow()
    .addComponents(
            new MessageButton()
            .setLabel('CONFIRM COMPLETION')
            .setStyle('SUCCESS')
            .setCustomId(`quests-q2-${amount2}-3`)
            .setEmoji(`${emoji_ssc}`),

        )

    await Interaction.followUp({
        embeds: [ quest2 ],  components: [row2]//, ephemeral: true
    });


    const amount5 = 500
    const quest5 = new MessageEmbed()
    .setTitle(`Quest 5:`)
    .setDescription(`__Rules:__\nDo a coinflip in ${cf_ch}, once done press the button below to check if you've completed it successfully`)
    .setColor("PURPLE")
    //.setThumbnail(user.displayAvatarURL())
    .addField("• Reward", `${emoji_is} ${amount5}`, true) 
    .setThumbnail("https://media.discordapp.net/attachments/934202018799685752/1004632408630493184/unknown.png")

    const row5 = new MessageActionRow()
    .addComponents(
            new MessageButton()
            .setLabel('CONFIRM COMPLETION')
            .setStyle('SUCCESS')
            .setCustomId(`quests-q5-${amount5}-3`)
            .setEmoji(`${emoji_ssc}`),

        )

    await Interaction.followUp({
        embeds: [ quest5 ],  components: [row5]
    });

    const amount6 = 300
    const quest6 = new MessageEmbed()
    .setTitle(`Quest 6:`)
    .setDescription(`__Rules:__\nPerform 5 reactions in ${ann_ch}, ${up_ch}, or ${sp_ch}, once done press the button below to check if you've completed it successfully`)
    .setColor("PURPLE")
    //.setThumbnail(user.displayAvatarURL())
    .addField("• Reward", `${emoji_is} ${amount6}`, true)
    .setThumbnail("https://media.discordapp.net/attachments/934202018799685752/1004633018511655003/unknown.png?width=671&height=671")

    const row6 = new MessageActionRow()
    .addComponents(
            new MessageButton()
            .setLabel('CONFIRM COMPLETION')
            .setStyle('SUCCESS')
            .setCustomId(`quests-q6-${amount6}-3`)
            .setEmoji(`${emoji_ssc}`),

        )

    await Interaction.followUp({
        embeds: [ quest6 ],  components: [row6]
    });

    const amount7 = 300
    const quest7 = new MessageEmbed()
    .setTitle(`Quest 7:`)
    .setDescription(`__Rules:__\nBuy a raffle ticket in ${raffle_ch}, once done press the button below to check if you've completed it successfully`)
    .setColor("PURPLE")
    //.setThumbnail(user.displayAvatarURL())
    .addField("• Reward", `${emoji_is} ${amount7}`, true)
    .setThumbnail("https://media.discordapp.net/attachments/934202018799685752/1004633139802538044/unknown.png")

    const row7 = new MessageActionRow()
    .addComponents(
            new MessageButton()
            .setLabel('CONFIRM COMPLETION')
            .setStyle('SUCCESS')
            .setCustomId(`quests-q7-${amount7}-3`)
            .setEmoji(`${emoji_ssc}`),

        )

    await Interaction.followUp({
        embeds: [ quest7 ],  components: [row7]
    });

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
        var amount = parseInt(action)
        var emoji = another_user
        const userData = await User.findOne({id: interaction.member.user.id}) || new User({id: interaction.member.user.id})
        if (user == "q1")// ME proof
        {
        const quest = await Quest.findOne({qst: `${emoji}`})
            
        if (quest.winners.includes(`${interaction.member.user.id}`))
        {
            if (userData.quests.me == false)
            {
                userData.quests.me = true;
                userData.wallet += amount;
                userData.save()
                return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})
            }
            else if (userData.quests.me == true)
            {
                return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
            }
        }
        else
        {
            return interaction.editReply({content: `You have not completed this quest or your submission is still awaiting approval from the team.`})
        }
        }

        else if (user == "q2")
        {
            var members = interaction.member
            var users = interaction.member.user


            if (members.nickname != null)
            {
            if (userData.quests.name == false)
            {
                if ( users.username.includes("Skunk Social") || users.username.includes("skunk social") || members.nickname.includes("Skunk Social") || members.nickname.includes("skunk social") )
                {
                    userData.quests.name = true;
                    userData.wallet += amount;
                    userData.save()
                    return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})
                }
                else 
                {
                    return interaction.editReply({content: `Your name does not include Skunk Social, please add Skunk Social or skunk social to your name on discord to complete this quest`})
                }
            }
            else
            {
                return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
            }
        }
        else{
            if (userData.quests.name == false)
            {
                if ( users.username.includes("Skunk Social") || users.username.includes("skunk social") )
                {
                    userData.quests.name = true;
                    userData.wallet += amount;
                    userData.save()
                    return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})
                }
                else 
                {
                    return interaction.editReply({content: `Your name does not include Skunk Social, please add Skunk Social or skunk social to your name on discord to complete this quest`})
                }
            }
            else
            {
                return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
            }
        }
        }
        else if (user == "q3")//sneak peek proof
        {
            const quest = await Quest.findOne({qst: `${emoji}`})
            
            if (quest.winners.includes(`${interaction.member.user.id}`))
            {
                if (userData.quests.pfp == false)
                {
                    userData.quests.pfp = true;
                    userData.wallet += amount;
                    userData.save()
                    return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})
                }
                else if (userData.quests.pfp == true)
                {
                    return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
                }
            }
            else
            {
                return interaction.editReply({content: `You have not completed this quest or your submission is still awaiting approval from the team.`})
            }
        }

        else if (user == "q4")//like rt proof
        {
            const quest = await Quest.findOne({qst: `${emoji}`})
            
            if (quest.winners.includes(`${interaction.member.user.id}`))
            {
                if (userData.quests.twt == false)
                {
                    userData.quests.twt = true;
                    userData.wallet += amount;
                    userData.save()
                    return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})
                }
                else if (userData.quests.twt == true)
                {
                    return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
                }
            }
            else
            {
                return interaction.editReply({content: `You have not completed this quest or your submission is still awaiting approval from the team.`})
            }
        }
        else if (user == "q5")//cf
        {
            if (userData.quests.cf == 0)
            {
                return interaction.editReply({content: `You have not completed this quest yet, please do a coinflip in the coinflip channel before pressing the button`})
            }
            else if (userData.quests.cf == 1)
            {
                userData.quests.cf = 2;
                userData.wallet += amount;
                userData.save()
                return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})

            }
            else if (userData.quests.cf == 2)
            {
                return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
            }
        }
        else if (user == "q6")//5 rxns
        {
            if (userData.quests.rxn < 5)
            {
                return interaction.editReply({content: `You have not completed this quest yet, you currently have ${userData.quests.rxn} reactions`})
            }
            else if (userData.quests.rxn >= 5)
            {
                if(userData.quests.rxn_done == false)
                {
                    userData.wallet += amount;
                    userData.quests.rxn_done = true
                    userData.save()
                    return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})
                }
                else
                {
                    return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
                }

            }
        }
        else if (user == "q7")//buy raffle
        {
            if (userData.quests.raffle == 0)
            {
                return interaction.editReply({content: `You have not completed this quest yet, please buy a raffle ticket in the raffle listings channel before pressing the button`})
            }
            else if (userData.quests.raffle == 1)
            {
                userData.quests.raffle = 2;
                userData.wallet += amount;
                userData.save()
                return interaction.editReply({content: `Goodjob! you earned ${amount} coins!`})

            }
            else if (userData.quests.raffle == 2)
            {
                return interaction.editReply({content: `You've already completed this quest before and collected the coins!`})
            }
        }
    }
    catch(err)
    {
        console.log(err)
    }
}