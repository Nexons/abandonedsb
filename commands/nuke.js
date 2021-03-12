module.exports = {
	name: 'nuke',
	description: 'A simple server nuker, Nothing special (yet)',
	execute(msg, args, functions, Discord, client) {
		const nukeEmbed = new Discord.MessageEmbed()
        .setColor('#800080')
        .setAuthor('Nex ¬ Nuke Menu', 'https://cdn.logojoy.com/wp-content/uploads/2018/08/23144949/2-1.png')
        .setDescription('MassDM   ?   BanAll   ?   NukeAll\n\nMassChannel [name]   ?   MassCategory [name]\n\n')
        .setFooter('ℕ𝕖𝕩 𝕊𝕖𝕝𝕗𝕓𝕠𝕥 𝕆𝕨𝕟𝕤 𝕐𝕠𝕦')
        if(!args[0]) {
            if(msg.guild.me.permissions.has('EMBED_LINKS')) return msg.channel.send(nukeEmbed)
            else return msg.react('❌')
        } 
	},
}