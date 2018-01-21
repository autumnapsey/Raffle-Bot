const config = require("../config.json");

exports.run = (client, message) => {
        const entrants = config.entrants.join(", ");

        message.channel.send(`Entrants: ${entrants}`);
};