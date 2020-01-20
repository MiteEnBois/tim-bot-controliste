const rolesArr = require("./roles.json");
module.exports = message => {
    var text = "**__Liste des equipes__**\n"

    for (const c in rolesArr.role_list) {
        var rol = message.guild.roles.find(role => role.name === rolesArr.role_list[c]);
        if (!rol) continue
        var map = rol.members.map(m => m.user.tag)
        var m = " membre"
        if (map.length != 1)
            m += "s"
        text += "**" + rol.name + "** : " + map.length + m + "\n"
    }

    return message.channel.send(text)
}
