const config = require("../config.json");

exports.run = (client, message, [...prizes]) => {
    const leadership = message.member.roles.some(r=>["Leader", "Awficer", "Junior Awficer", "Owner"].includes(r.name));

    if (!leadership) {
        message.channel.send(`You're not permitted to use this command.`);
    } else {

        const list = config.entrants;
        const num = Math.floor(Math.random() * list.length);

        const winner = list[num];

        const prize = prizes.join(" ");


        message.channel.send(`Congrats, ${winner}! You've won ${prize}!`);
    }

};