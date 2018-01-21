const config = require("../config.json");

exports.run = (client, message) => {

    const entrants = config.entrants.map(entrant => ({
            name: "-",
            value: entrant.name,
            inline: true
        })
    );

    message.channel.send({embed: {
            color: 0xe5f689, // Prefix hexadecimal with '0x'
            title: "Entrants",
            fields: entrants,
            timestamp: new Date(),
        }
    });
};