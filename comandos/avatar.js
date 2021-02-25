const Discord = require("discord.js")

module.exports = {
    nombre: "avatar",
    alias: [],
    run: (client, message, args) => {
        let user;
    
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else {
          user = message.author;
        }
    
        let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
    
    
        const embed = new Discord.MessageEmbed()
          .setTitle(`${user.tag} avatar`)
          .setColor("YELLOW")
          .setImage(avatar)
          .setTimestamp()
    
        return message.channel.send(embed);
    }
}