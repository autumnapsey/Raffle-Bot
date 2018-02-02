const config = require("../config.json");

exports.run = (client, message, [...prizes]) => {
    const leadership = message.member.roles.some(r=>["Leader", "Awficer", "Junior Awficer", "Owner"].includes(r.name));

    if (!leadership) {
        message.channel.send(`You're not permitted to use this command.`);
    } else {
        const prize = prizes.join(" ");
        const list = ( prize.toLowerCase() === "portrait" ?
            config.entrants.filter(entrant => entrant.portraits === true) :
            config.entrants.filter(entrant => entrant.goodies === true)
        );

        const num = Math.floor(Math.random() * list.length);

        const winner = list[num].name;

        message.channel.send(`Congrats, ${winner}! You've won ${prize}!`);
    }

};