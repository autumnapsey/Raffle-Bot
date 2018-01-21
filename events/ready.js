exports.run = (client) => {
    client.user.setActivity(`raffling winners!`);
    console.log(`Ready  in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    const channel = client.channels.get('398200709989924896'); //bot-log on Bot Playground = 398200709989924896
    channel.send("Win-r-Tron ready for raffling!");
//307585777292804096 bot-commands
}