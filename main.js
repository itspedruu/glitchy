#!/usr/bin/env node

const Glitch = require('./lib/Glitch.js');
const readline = require('readline-sync');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const command = process.argv[2];
const MAIN_FOLDER = process.cwd();

switch (command) {
    case 'import':
        Glitch.import();
        break;
    case 'logs':
        Glitch.displayLogs();
        break;
    case 'setup': {
        let questions = [
            {text: 'Github Repo:', key: 'GH_REPO'},
            {text: 'Glitch Project Name:', key: 'GLITCH_PROJECT_NAME'},
            {text: 'Glitch Project ID:', key: 'GLITCH_PROJECT_ID'},
            {text: 'Glitch Token:', key: 'GLITCH_TOKEN'}
        ];

        for (let index = 0; index < questions.length; index++) questions[index].response = readline.question(questions[index].text);

        const data = '\n' + questions.map(question => `${question.key}=${question.response}`).join('\n');
        const stream = fs.createWriteStream(path.join(MAIN_FOLDER, '.env'), {flags: 'a'});

        stream.write(data);
        console.log(`\n------- SETUP DONE -------\n${data}`);

        break;
    }
    default:
        console.log(`The command you are trying to execute doesn't exist.`);
}

module.exports = Glitch;