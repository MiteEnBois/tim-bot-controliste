require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, (...args) => eventHandler(client, ...args))
    })
})

//client.login(process.env.BOT_TOKEN)
client.login("NjY4MTczNjkxNTE5MjM4MTU0.XiWqSA.0hyj204r0WYDXgYr-muOvxSdXRQ")
