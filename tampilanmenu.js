require ("./case")
const chalk = require("chalk")
const fs = require("fs")
global.n = "`"
global.menuforu = (prefix, simbols) => {
return `┌╾⚟┉➲ ${c}【 ʙᴏᴛ - ɪɴғᴏ 】${c} ⟢
├────────────────
│  ⎘ ᴛʏᴘᴇ: ᴄᴀꜱᴇ
│  ⎘ ᴍᴏᴅᴇ: ${shoNhe.public ? 'Public' : 'Self'}
│  ⎘ ᴘʀᴇғɪx: ${prefix}
│  ⎘ ᴅᴀᴛᴇ: ${moment().format('dddd, D MMMM YYYY')}
│  ⎘ ᴀɪ ʜɪᴛꜱ: ${aiMessage}
│  ⎘ ᴠᴇʀꜱɪᴏɴ: ${version}
│  ⎘ ᴛᴏᴘ ᴄᴏᴍᴍᴀɴᴅs:
${formattedCommandList}
└──────────────────╼.✗

┌╾⚟┉➲【𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐】─═⚔️═─┐
│  
│  ⟿ ${simbols} ${prefix}ᴏᴡɴᴇʀᴍᴇɴᴜ  (Akses terbatas)
│  ⟿ ${simbols} ${prefix}ɢᴀᴍᴇᴍᴇɴᴜ  (Permainan & tantangan)
│  ⟿ ${simbols} ${prefix}ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ  (Pengunduhan konten)
│  ⟿ ${simbols} ${prefix}ʀᴀɴᴅᴏᴍᴍᴇɴᴜ  (Random commands)
│  ⟿ ${simbols} ${prefix}ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ  (Tools konversi)
│  ⟿ ${simbols} ${prefix}ɢʀᴏᴜᴘᴍᴇɴᴜ  (Fitur grup)
│  ⟿ ${simbols} ${prefix}ᴏᴛʜᴇʀᴍᴇɴᴜ  (Lain-lain)
│  ⟿ ${simbols} ${prefix}ᴀᴜᴅɪᴏᴍᴇɴᴜ  (Pengolahan audio)
│  ⟿ ${simbols} ${prefix}ᴀɪᴍᴇɴᴜ  (AI-based commands)
│  ⟿ ${simbols} ${prefix}ᴀɴɪᴍᴇᴍᴇɴᴜ  (Fitur Anime)
│  
└────────────────────────┘

┌╾⚟┉➲ ${n}【 ғᴇᴀᴛᴜʀᴇᴅ】${n} ⟢
├────────────────
│  冬 ᴜꜱᴇʀ ᴄᴏᴍᴍᴀɴᴅs
│  ⟿ ${simbols} ${prefix}listuserfire
│  ⟿ ${simbols} ${prefix}cekfire
│  ⟿ ${simbols} ${prefix}bensin
│  ⟿ ${simbols} ${prefix}afk
│  ⟿ ${simbols} ${prefix}listcmd
│  ⟿ ${simbols} ${prefix}cek
│  ⟿ ${simbols} ${prefix}find
│  ⟿ ${simbols} ${prefix}ceksaldo
│  ⟿ ${simbols} ${prefix}scriptnoenc
└──────────────────╼.✗

┌╾⚟┉➲ ${n}【 ɢᴜɪᴅᴇ 】${n} ⟢
├────────────────
│  冬 ꜰᴏʀ ᴍᴇɴᴜ: ${prefix}allmenu
│  冬 ᴄᴏɴᴛᴀᴄᴛ ꜰᴏʀ ᴇʀʀᴏʀs: ${prefix}owner
└──────────────────╼.✗`}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})