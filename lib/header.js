import figlet from 'figlet'
import gradient from 'gradient-string'

const getFonts = () => new Promise((resolve) => {
  figlet.fonts((_, fonts) => resolve(fonts))
})
const fonts = await getFonts()
const fontIndex = Math.floor(Math.random() * fonts.length)
const font = fonts[fontIndex] // 'Isometric3' 'Elite'

const asci = () => new Promise((resolve) => {
  figlet.text('MXC', { font }, (_, text) => resolve(text))
})// zz

const text = await asci()
console.log(gradient.passion(text)) // mind, retro

log.greyDim(`font: ${font} (${fontIndex}/${fonts.length})`)

log.grey(PKG_NAME + ': ' + C.yellow(PKG_VERSION))

// log.grey(fillFrom('╸')) // █ ▓ ▒ ░ ╺╸━
console.log(gradient.passion(fillFrom('━'))) // mind, retro

if (argv.help || argv._.includes('help')) {
  L.loading('options', `
init               | init sample configuration
apply <app>        | apply
version, --version | show version
help, --help       | help menu
-v, --verbose      | verbose logs
-F, --force        | force bypass confirmation prompts
--setup-completion | setup shell tab completion
--clean-completion | cleanup tab completion`)
  process.exit()
}
