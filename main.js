#!/usr/bin/env node

const Glitch = require('./lib/Glitch.js');

require('dotenv').config();

const command = process.argv[2];

switch (command) {
    case 'import':
        Glitch.import();
        break;
    case 'logs':
        Glitch.displayLogs();
        break;
    default:
        console.log(`The command you are trying to execute doesn't exist.`);
}

module.exports = Glitch;