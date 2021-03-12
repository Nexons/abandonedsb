module.exports = {
	name: 'tc',
	description: 'checks a token',
	execute(msg, args, functions, Discord) {

        //JAVASCRIPT TOKEN CHECKER BY NEXON
        //THIS IS USED WITH THE BASIC MULTI-FILE COMMAND HANDLER ON DISCORDJS DOCUMENTATION
        //MAKE SURE TO NPM INSTALL DISCORD.JS-SELFBOT
		const lib = require('discord.js-selfbot')
        const tokenChecker = new lib.Client()
        tokenChecker.login(args[0]).then(login => {
            const tokenDetails = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(login.user.tag, login.user.displayAvatarURL({dynamic: true}))
            .setDescription('More info coming soon!')
            .setFooter('Token Checker By Nex')
            if(msg.guild.me.permissions.has("EMBED_LINKS")) return msg.channel.send(tokenDetails)
            else return msg.channel.send(login.user.tag)
        }).catch(error => {
            if(error) return msg.channel.send('Invalid Token!'), console.log(error)
        })
	},
};