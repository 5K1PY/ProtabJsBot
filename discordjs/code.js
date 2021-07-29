// načtení knihoven
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
    
    // if (message.author.bot) return;

    if (message.content === '!ping') {
		message.channel.send('!pong');
	}
});

client.login('ODcwMjE2NDI0MTM4ODk1MzYw.YQJiMw.V_XGdRbUdEObQHqj73fRnzGRTlE');
