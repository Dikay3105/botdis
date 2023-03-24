const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        131071
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.content.includes(':linhimmom:')) {
        const target = message.guild.members.cache.get('624816779692081188');

        if (target) {
            const role = message.guild.roles.cache.find(role => role.name === 'Muted');
            if (role) {
                target.roles.add(role);
                setTimeout(() => target.roles.remove(role), 60000);
				message.channel.send("Cút 60s nha chó Linh");
            } else {
                console.log('Could not find Muted role.');
            }
        } else {
            console.log('Could not find target user.');
        }
    }
});

client.login('MTA4NTIxNTUwNzU2NjgyOTU4OA.GaHt5B.OOvCrElVchXlgkStjnHcZ3-KIMk56QIH_kkuxU');
