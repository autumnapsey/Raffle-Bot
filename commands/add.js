const fs = require("fs");
const config = require("../config.json");

exports.run = (client, message, [...name]) => {
    const leadership = message.member.roles.some(r=>["Leader", "Awficer", "Junior Awficer", "Owner"].includes(r.name));

    if (!leadership) {
        message.channel.send(`You're not permitted to use this command.`);
    } else {

        let entrant = name.join(" ");

        let newList = [...config.entrants, entrant];

        config.entrants = newList;

        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

        message.channel.send(`${entrant} has been added to the raffle!`);

    }
};