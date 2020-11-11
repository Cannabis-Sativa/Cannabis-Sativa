const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/cannabisuo'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
});

client.on("message", async message => {
  if (message.content.startsWith('!twitch')){
    message.channel.send('https://www.twitch.tv/cannabisuo');
    }

    if (message.content.startsWith('!youtube')){
        message.channel.send('https://www.youtube.com/channel/UCWq8mAjG1gbb58NqKs4KGVw?view_as=subscriber');
        }

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // comando ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
});

client.login(config.token);