const fs = require("fs");
const config = require("../config.json");

exports.run = (client, message, [...name]) => {
    let entrant = name.join(" ");

    let newList = [...config.entrants, entrant];

    config.entrants = newList;

    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
};