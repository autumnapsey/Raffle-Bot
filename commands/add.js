const fs = require("fs");
const config = require("../config.json");

exports.run = (client, message, [...addition]) => {
    const leadership = message.member.roles.some(r=>["Leader", "Awficer", "Junior Awficer", "Owner"].includes(r.name));
    const entrant = addition[0];
    let listCheck = config.entrants.map(entrant => entrant.name.toLowerCase());

    if (!leadership) {
        message.channel.send(`You're not permitted to use this command.`);
    } else if (listCheck.includes(entrant.toLowerCase())){
        message.channel.send(`${entrant} is already on the list.`);
    } else {

        let newEntrant = {
            name: entrant,
            goodies: addition.includes("goodies"),
            portraits: addition.includes("portraits")
        }

        let newList = [...config.entrants, newEntrant];

        config.entrants = newList;

        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

        message.channel.send(`${entrant} has been added to the raffle!`);

    }
};