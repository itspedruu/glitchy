const request = require('request');
const utils = require('./utils.js');
const WebSocket = require('ws');

const ENDPOINTS = require('../endpoints.json');

module.exports = class Glitch {
    static async import() {
        return await request.post(utils.formatString(ENDPOINTS.IMPORT_GITHUB_REPO, process.env.GLITCH_TOKEN, process.env.GLITCH_PROJECT_ID, process.env.GH_REPO));
    }

    static displayLogs() {
        const url = utils.formatString(ENDPOINTS.LOGS_WEBSOCKET, process.env.GLITCH_PROJECT_NAME, process.env.GLITCH_TOKEN);
        const connection = new WebSocket(url);

        connection.on('open', () => {
            console.log('[+] Connected to the Glitch Logs Websocket.');
        });

        connection.on('message', response => {
            const data = JSON.parse(response);
            if (!data || (data && data.process !== 'application')) return;

            const date = new Date(data.timestamp);
            console.log(`[LOG] (${utils.getDateString(date)}) » ${data.text}`);
        });
    }
}