module.exports = {
	name: 'howgay',
	description: 'How much of a fag is a user',
	execute(msg, args, functions, Discord) {
		const faggot = msg.mentions.members.first()
        if(!faggot) return msg.react()
        let gayness = Math.floor(Math.random() * 100)
        if(args.pop() === 'x') gayness = '100'
        if(functions.isEmbeddable(msg)) {
            const gayEmbed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${faggot.user.username} is ${gayness}% gay`)
            .setFooter('ʰᵒʷᵍᵃʸ ᵇʸ ⁿᵉˣᵒⁿ')
            return msg.channel.send(gayEmbed)
        }
        else return msg.channel.send(`${faggot.user.username} is ${gayness}% gay`)
	},
};