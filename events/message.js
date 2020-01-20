const ping = require('../commands/ping')
const join_role = require('../commands/join_role')
const kick_role = require('../commands/kick_role')
const test = require('../commands/list_role')

module.exports = (client, message) => {
    if (message.content === "ping") {
        return ping(message)
    }
    if (message.content.startsWith('!rejoin')) {
        return join_role(message)
    }
    if (message.content.startsWith('!degage')) {
        return kick_role(message)
    }
    if (message.content === "!list") {
        return test(message)
    }
}