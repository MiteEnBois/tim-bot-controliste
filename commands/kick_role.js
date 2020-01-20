const rolesJ = require("./roles.json")
const rolesArr = rolesJ.role_list
module.exports = message => {

    const member = message.mentions.members.first();
    const author = message.member

    if (!member) { return message.reply('Pas de membre selectionné') }
    try {
        var roleA = message.guild.roles.find(role => role.name === checkRole(author));
        var roleM = message.guild.roles.find(role => role.name === checkRole(member));

        if (roleA !== roleM) { throw "pas de roles en commun" }

        member.removeRole(roleM)

    } catch (err) { return message.channel.send("erreur : " + err) }

    return message.channel.send(member.user.username + " a été viré de la " + roleA.name + " par " + author.user.username)
}

function checkRole(member) {

    var count = 0
    var roleTrouve
    for (let i = 0; i < rolesArr.length; i++) {
        if (member.roles.some(role => role.name === rolesArr[i])) {
            roleTrouve = rolesArr[i]
            count++
        }
    }
    if (count == 0) { throw member.user.username + " n'a pas de role, dégage :crou:" }
    if (count > 1) { throw member.user.username + "a trop de roles toi, comment ca se fait?" }
    return roleTrouve
}
