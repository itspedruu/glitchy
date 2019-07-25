<p align="center">
    <img src="https://raw.githubusercontent.com/itspedruu/glitchy/master/logo.png">
</p>

## About

Glitchy is a cli application for [Glitch](https://glitch.com/), a online platform for building online application with or without [Node.js](https://nodejs.org).

## Setup

In your project folder you need to have 4 environment variables as listed in the **.env.example** file

The last 2 variables you can get by accessing the Network Tab with the Chrome DevTools and then click on **Import from Github** in your glitch project. After you clicked the button search for a url like this `https://api.glitch.com/project/githubImport`

## Commands

| Commands         | Description                                                       |
|------------------|-------------------------------------------------------------------|
| `glitchy import` | Imports your current github repository onto your glitch project   |
| `glitchy logs`   | Displays a realtime log information about your glitch application |
| `glitchy setup`  | Setups the glitchy environment variables                          |

## Core

You can also use the core functions of this library. Example:

```js
const Glitchy = require('glitchy');

Glitchy.import(); // Imports the github repository
```