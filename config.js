//===================[ OWNER ]=====================\\
global.owner = [
  "_", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.namaowner = [ "azrezry" ]
global.namastore = [ "*AzrezryShre*" ]
global.wm = "azrezry store"
global.packname = "ᴘʀᴏᴊᴇᴄᴛ ꜱᴄʀɪᴘᴛ"
global.author = "azrezry"
//===================[ FUNCTION LAIN NYA ]=====================\\
global.fotonya2 = "https://telegra.ph/file/c5eb1485207e04371bc19.jpg"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.wm = "AzrezryShre"
global.ownername = "Azrezry"
global.tebakbendera = {};
global.susunkata = {};
global.tebakkata = {};
global.kuis = {};
global.siapakahaku = {};
global.tebakkimia = {};
global.family100 = {};
global.asahotak = {};
global.gamewaktu = 60
global.welcome = true
global.public = true
global.syt = "https://whatsapp.com/channel/0029VakTtLD9MF94Un9kgJ29"
//===================[ MESS ]=====================\\
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    GroupSekolah: '_*❗Perintah Ini Hanya Bisa Digunakan Di Grup Premium!*_',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})