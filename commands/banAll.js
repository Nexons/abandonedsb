module.exports = {
	name: 'banall',
	description: 'Bans all members of a server!',
	execute(msg, args, functions, Discord, client) {
		msg.edit('are you sure you want to do this? Y/N')
        async function banAllMembers() {
            msg.guild.members.fetchAll().forEach(member => {
                if(member.bannable) return member.ban
            })
        }
        const filter = msg.content.toLowerCase().includes("y", "n") && msg.author.id === client.user.id
        msg.channel.awaitMessages(filter, {
            time: 30000
        }).then(collected => {
            if(!collected) return msg.delete().then(msg.channel.send('Request timed out (30s)'))
            console.log(collected.first())
            const answer = collected.first().content.toLowerCase()
            if(answer === 'y') return banAllMembers()
            else return msg.channel.send('Phew! That was a close one!')
        })
	},
};