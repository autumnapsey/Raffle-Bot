const fs = require("fs");
const config = require("../config.json");

exports.run = (client, message, [...name]) => {
    const leadership = message.member.roles.some(r=>["Leader", "Awficer", "Junior Awficer", "Owner"].includes(r.name));
    const entrant = name.join(" ");
    let listCheck = config.entrants.map(entrant => entrant.toLowerCase());

    if (!leadership) {
        message.channel.send(`You're not permitted to use this command.`);
    } else if (listCheck.filter(entrant => entrant.toLowerCase())){
        message.channel.send(`${entrant} is already on the list.`);
    } else {

        let newList = [...config.entrants, entrant];

        config.entrants = newList;

        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

        message.channel.send(`${entrant} has been added to the raffle!`);

    }
};