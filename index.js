console.clear()
console.log('███╗░░██╗███████╗██╗░░██╗░█████╗░███╗░░██╗  ░██████╗██████╗░\n████╗░██║██╔════╝╚██╗██╔╝██╔══██╗████╗░██║  ██╔════╝██╔══██╗\n██╔██╗██║█████╗░░░╚███╔╝░██║░░██║██╔██╗██║  ╚█████╗░██████╦╝\n██║╚████║██╔══╝░░░██╔██╗░██║░░██║██║╚████║  ░╚═══██╗██╔══██╗\n██║░╚███║███████╗██╔╝╚██╗╚█████╔╝██║░╚███║  ██████╔╝██████╦╝\n╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚══╝  ╚═════╝░╚═════╝░')
const Discord = require('discord.js-selfbot')
const client = new Discord.Client()

const functions = require('./functions.js')

const config = require('config.json')
const prefix = config.prefix

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`${client.user.username} welcome to the panel!`)
})

client.on('message', async msg => {
    if (!msg.content.startsWith(cprefix) || msg.author.id != client.user.id) return;

    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
    	client.commands.get(command).execute(msg, args, functions, Discord, client);
    } catch (error) {
    	console.error(error);
    	msg.edit(`:x: There was an error trying to run ${command}`);
    }
})

client.login(config.token)