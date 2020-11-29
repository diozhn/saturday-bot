/**
 * O Comando Help envia uma mensagem de ajuda.
 * Contendo comandos e outras informações.
 */

module.exports = {
  run: (client, message, args) => {
    /** Objeto embed que irá ser enviado. */
    let embed = {
      color: 0xB1103C,
      title: 'Oi, eu sou a Saturday e esses são os meus comandos!',
      url: 'https://github.com/diozhn/saturday-bot',
      footer: {
        text: 'Sou feita com base no Project A da Liga dos Programadores!'
      },
      fields: []
    }

    let commands = client.commands

    if (message.member === null || !message.member.hasPermission('ADMINISTRATOR')) commands = commands.filter(c => !c.help.admin)

    commands.forEach(command => {
      if (command.alias) return
      embed.fields.push(
        {
          name: `> **${command.help.name}**`,
          value: `**Descrição**: ${command.help.description}\n**Como Usar**: ${process.env.PREFIX}${command.help.usage}\n**Categoria**: ${command.help.category}`
        }
      )
    })

    message.author.send({ embed: embed })
      .then(() => message.react('⚡'))
      .catch(() => message.reply(`eu não tenho permissões para enviar DM para você 😥`))
  },

  conf: {},

  help: {
    name: 'help',
    category: 'Membro',
    description: 'Mostra todos os comandos disponíveis no bot.',
    usage: 'help'
  }
}
