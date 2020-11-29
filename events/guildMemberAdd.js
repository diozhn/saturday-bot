const moment = require('moment')
const Discord = require('discord.js')

/**
 * O evento guildMemberAdd é emitido após um membro entrar (ser adicionado em uma guild).
 */

module.exports = async (client, member) => {
  // Verificações anti-selfbot de divulgação já que estamos tendo problemas com isso.
  const daysSinceCreation = moment().diff(moment(member.user.createdAt), 'days')
  const isDefaultAvatar = member.user.displayAvatarURL.startsWith('https://discordapp.com/')
  const domaincount = member.user.username.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/)

  let join = new Discord.RichEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setAuthor(`✨ Um novo membro entrou no servidor!`)
    .setDescription(`${member} acabou de entrar.`)
    .setFooter(`Saturday diz, Oi!`)
    .setTimestamp()

  member.guild.channels.get(process.env.JOINCHANNEL).send(join).catch()
  member.guild.channels.get(process.env.GREETCHANNEL).send(message).catch()
}
