const rolesJ = require("./roles.json")
const rolesArr = rolesJ.role_list
module.exports = message => {

    const member = message.mentions.members.first();
    const author = message.member

    if (!member) { return message.reply('Pas de membre selectionné') }
    try {
        var roleA = message.guild.roles.find(role => role.name === checkRoleA(author));
        var okM = checkRoleM(member)
        if (okM > 0) {
            throw member.user.username + " est deja dans une team"
        }


    } catch (err) { return message.channel.send("erreur : " + err) }
    member.addRole(roleA);
    return message.channel.send(member.user.username + " a rejoin la " + roleA.name + " grace a " + author.user.username)

}

function checkRoleA(member) {
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

function checkRoleM(member) {
    var count = 0
    for (let i = 0; i < rolesArr.length; i++) {
        if (member.roles.some(role => role.name === rolesArr[i])) {
            count++
        }
    }
    return count
}