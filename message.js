//===================[ TEMPAT MODULE ]=====================\\
require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const crypto = require('crypto')
const ms = require("parse-ms") 
const path = require('path')
const ytdl = require("node-yt-dl");

module.exports = async (azrezry, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

//===================[ TAMPAT PREFIX ]=====================\\
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, getRandom } = require('./lib/myfunc')

const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
let banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (azrezry.user.id.split(':')[0]+'@s.whatsapp.net' || azrezry.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await azrezry.decodeJid(azrezry.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await azrezry.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { getLimit, isLimit, limitAdd, kurangLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let db_balance = JSON.parse(fs.readFileSync("./database/balance.json"));
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}
const isBan = banned.includes(m.sender)
//=================[ TEMPAT FUNCTION DATABASE ]====================\\

const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
const _prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
_prem.expiredCheck(azrezry, premium)
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone')

let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
const kambing = fs.readFileSync('./lib/kambing.jpg')
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
const afk = require('./lib/afk');
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
//===================[ TAMPILAN PANEL ]=====================\\
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

//==================[ FUNCTION FITUR ]=====================\\
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await azrezry.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
azrezry.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
azrezry.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};


//=========================================\\


const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363319981264645@newsletter`,
newsletterName: `azrezry`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

//public/self
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}
//===================[ FUNCTION REPLY ]=====================\\


const reply = (teks) => { 
azrezry.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "acumalaka", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": kambing, 
"mediaUrl": "https://www.youtube.com/", 
"sourceUrl": "https://www.youtube.com/" }}}, { quoted: m }) }


//=========================\\



//==================[ FUNCTION WAKTU ]======================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}
//=========================\\

if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
reply(`Jangan tag ${pushname}, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
azrezry.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}

//=========================\\
const tag = `${m.sender.split('@')[0]}`

let usere = `${m.sender.split('@')[0]}`+'@s.whatsapp.net'

function monospace(string) {
return '```' + string + '```'
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\nPenebak : ${tag}\nJawaban : ${jawaban}\nHadiah balance : 5`);
addBalance(usere, 5, db_balance)
azrezry.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakbendera[from];
} else azrezry.sendMessage(m.chat, {react: {text: '🔴', key: m.key}})
}

if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\nPenebak : ${tag}\nJawaban : ${jawaban}\nHadiah balance : 5`);
addBalance(usere, 5, db_balance)
azrezry.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete susunkata[from];
} else azrezry.sendMessage(m.chat, {react: {text: '🔴', key: m.key}})
}

if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (budy.match('nyerah|Nyerah|.nyerah')) {
m.reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete kuis[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\nPenebak : ${tag}\nJawaban : ${jawaban}\nHadiah balance : 5`);
addBalance(usere, 5, db_balance)
azrezry.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete kuis[from];
} else azrezry.sendMessage(m.chat, {react: {text: '🔴', key: m.key}})
}

if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (budy.match('nyerah|Nyerah|.nyerah')) {
m.reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\nPenebak : ${tag}\nJawaban : ${jawaban}\nHadiah balance : 5`);
addBalance(usere, 5, db_balance)
azrezry.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete siapakahaku[from];
} else azrezry.sendMessage(m.chat, {react: {text: '🔴', key: m.key}})
}

if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (budy.match('nyerah|Nyerah|.nyerah')) {
m.reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\nPenebak : ${tag}\nJawaban : ${jawaban}\nHadiah balance : 5`);
addBalance(usere, 5, db_balance)
azrezry.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[from];
} else azrezry.sendMessage(m.chat, {react: {text: '🔴', key: m.key}})
}

if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (budy.match('nyerah|Nyerah|.nyerah')) {
m.reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\nPenebak : ${tag}\nJawaban : ${jawaban}\nHadiah balance : 5`);
addBalance(usere, 5, db_balance)
azrezry.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete asahotak[from];
} else azrezry.sendMessage(m.chat, {react: {text: '🔴', key: m.key}})
}


if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
m.reply(`*GAME FAMILY 100*\n\nJawaban Kamu Benar!\nJawaban : ${i}\nHadiah balance : 5\n\n${jawaban.length < 1 ? 'Semua Jawaban Sudah Tertebak!\nIngin Bermain Lagi? Kirim '+prefix+'family100' : 'Sisa Yang Belum Ditebak : '+jawaban.length}`)
addBalance(usere, 5, db_balance)
}}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}}

if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (budy.match('nyerah|Nyerah|.nyerah')) {
m.reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\nPenebak : ${tag}\nJawaban : ${jawaban}\nHadiah balance : 5`);
addBalance(usere, 5, db_balance)
azrezry.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkata[from];
} else azrezry.sendMessage(m.chat, {react: {text: '🔴', key: m.key}})
}



//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
switch(command) {

case 'susunkata':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal : ${soal}\nPetunjuk : ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu : ${gamewaktu} Detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (budy.match('nyerah', 'Nyerah')) {
reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (susunkata[from]) reply(`*WAKTU HABIS!*\n\nJawaban Dari Soal :\n${monospace(soal)}\n\nAdalah : ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break

case 'tebakkata':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (from in tebakkata) return reply('Masih Ada Game Yang Belum Diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME tebakkata*\n\nSoal : ${soal}\nPetunjuk : ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu : ${gamewaktu} Detik\n\nKetik .nyerah`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (budy.match(`nyerah`, `Nyerah`, `${prefix}nyerah`)) {
reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (tebakkata[from]) reply(`*WAKTU HABIS!*\n\nJawaban Dari Soal :\n${monospace(soal)}\n\nAdalah : ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break


case 'kuis':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (from in kuis) return reply('Masih Ada Game Yang Belum Diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS*\n\nSoal : ${soal}\nPetunjuk : ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu : ${gamewaktu} Detik\n\nKetik .nyerah Tuk Menyerah`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (budy.match(`nyerah`, `Nyerah`, `${prefix}nyerah`)) {
reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete kuis[from];
clearTimeout(waktu);
} else if (kuis[from]) reply(`*WAKTU HABIS!*\n\nJawaban Dari Soal :\n${monospace(soal)}\n\nAdalah : ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break



case 'asahotak':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (from in asahotak) return reply('Masih Ada Game Yang Belum Diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal : ${soal}\nPetunjuk : ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu : ${gamewaktu} Detik\n\nKetik .nyerah Tuk Menyerah`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (budy.match(`nyerah`, `Nyerah`, `${prefix}nyerah`)) {
reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (asahotak[from]) reply(`*WAKTU HABIS!*\n\nJawaban Dari Soal :\n${monospace(soal)}\n\nAdalah : ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
//=========================================\\
case 'siapakahaku': 
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (from in siapakahaku) return reply('Masih Ada Game Yang Belum Diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SIAPAKAH AKU*\n\nSoal : ${soal}\nPetunjuk : ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu : ${gamewaktu} Detik\n\nKetik .nyerah Tuk Menyerah`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (budy.match(`nyerah`, `Nyerah`, `${prefix}nyerah`)) {
reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (siapakahaku[from]) reply(`*WAKTU HABIS!*\n\nJawaban Dari Soal :\n${monospace(soal)}\n\nAdalah : ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
//=========================================\\
case 'family100': 
case 'f100':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal : ${soal}\nTotal Jawaban : ${jawaban.length}\n\nWaktu : ${gamewaktu} Detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
let jwb = family100[from].jawaban
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban Yang Belum Terjawab :\n`
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}
break

case 'tebakbendera':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal : ${soal}\nPetunjuk : ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu : ${gamewaktu} Detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (budy.match('nyerah', 'Nyerah')) {
reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (tebakbendera[from]) reply(`*WAKTU HABIS!*\n\nJawaban Dari Soal :\n${monospace(soal)}\n\nAdalah : ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break

case 'tebakkimia':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (from in tebakkimia) return reply('Masih Ada Game Yang Belum Diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./database/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KIMIA*\n\nSoal : ${soal}\nWaktu : ${gamewaktu} Detik\n\nKetik .nyerah Tuk Menyerah`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (budy.match(`nyerah`, `Nyerah`, `${prefix}nyerah`)) {
reply(`*KAMU NENYERAH*\n\nJawabannya Adalah *${jawaban}*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (tebakkimia[from]) reply(`*WAKTU HABIS!*\nNama Unsur Dari Lambang ${soal}\n\nAdalah : ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break


case 'addbalance': {
if (!isCreator) return reply(mess.OnlyOwner)
const Kalender000 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
if (!text) return reply(`*Contoh :* ${prefix+command} 62xx 1000`)
let trgt = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addBalance(trgt, parseInt(args[1]), db_balance)
reply(`*SUKSES ADD BALANCE*
 • Nomor : ${args[0]}
 • Tanggal : ${Kalender000}
 • Saldo : Rp. ${getBalance(m.sender, db_balance)} `)
}
break

case 'minbalance':
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`*Contoh :* ${prefix+command} 62xx 1000`)
if (getBalance(q.split(",")[0]+"@s.whatsapp.net", db_balance) < q.split(",")[1] && getBalance(q.split(",")[0]+"@s.whatsapp.net", db_balance) !== 0) return reply(`Pengurangan Sangat Berlebihan`)
const Kalender010 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
kurangBalance(target, parseInt(args[1]), db_balance)
reply(`*SUKSES MIN BALANCE*
 • Nomor : ${args[0]}
 • Tanggal : ${Kalender010}
 • Saldo : Rp. ${toRupiah(args[1])} `)
break


case 'balance':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
const Kalender0001 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var mybal = await getBalance(m.sender, db_balance)
reply(`*INFO DATA ANDA*

 • Name   : ${pushname}
 • Nomor  : ${m.sender.split("@")[0]}
 • balance : $${toRupiah(getBalance(m.sender, db_balance))}
 • Tanggal : ${hariini}`)
}
break
case 'tfbalance': case 'tfb': case 'transferbalance':{
    if (!text) {
    if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
    return reply(`Gunakan dengan cara ${prefix + command} *@tag nominal* atau ketik ${prefix + command} *nominal*\n\nContoh: ${prefix + command} @6285600793871 2000`);
    }
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!users) return reply(`Tag orang yang ingin di transfer balance`);
    if (!args[1]) return reply(`Masukkan nominal nya!`);
    if (isNaN(args[1])) return reply(`Nominal harus berupa angka!`);
    if (args[1] === 'infinity') return reply(`Yahaha saya tidak bisa ditipu`);
    if (args[1].includes("-")) return reply(`Jangan menggunakan -`);
    var anu = getBalance(m.sender, db_balance);
    if (anu === null || anu === undefined || isNaN(anu)) {
        return reply(`Terjadi kesalahan dalam mengambil balance Kamu.`);
    }
    anu = parseInt(anu);
    if (anu < args[1]) {
        return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`);
    }
    kurangBalance(m.sender, parseInt(args[1]), db_balance);
    addBalance(users, parseInt(args[1]), db_balance);
    azrezry.sendTextWithMentions(m.chat, `Sukses transfer balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m);
}
break

case 'topglobal': case 'topbalance': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup)return reply(mess.OnlyGrup)
db_balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (db_balance.length < 10) total = db_balance.length
for (let i = 0; i < total; i ++){
top += `${i + 1}. @${db_balance[i].id.split("@")[0]}\n=> Balance : $${db_balance[i].balance}\n\n`
arrTop.push(db_balance[i].id)
}
azrezry.sendTextWithMentions(m.chat, top, m)
//mentions(top, arrTop, true)
}
break


case 'open': case 'buka': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
azrezry.sendMessage(from, {react: {text: "🧐", key: m.key}})
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Bot bukan admin")
azrezry.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
reply(textOpen || `Sukses Mengizinkan Semua Peserta Dapat Mengirim Pesan Ke Grup Ini`)
}
break

case 'close': case 'tutup': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
azrezry.sendMessage(from, {react: {text: "🧐", key: m.key}})
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply("Bot bukan admin")
azrezry.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
reply(textClose || `Sukses Mengizinkan Hanya Admin Yang Dapat Mengirim Pesan Ke Grup Ini`)
}
break


case 'promote': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) reply('Fitur Khusus admin!')
if (!isBotAdmins) reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await azrezry.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
 case 'demote': {
 if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply('Bot Bukan Admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await azrezry.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break;

case 'hidetag': case 'h':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
azrezry.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = false
reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = true
reply('Sukses Change To Public Mode')
}
break

case 'cekkhodam': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!text) return m.reply(`Contoh: ${prefix+command} asep`)
const khodam = pickRandom([
"Kaleng Cat Avian",
"Pipa Rucika",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"Sungut Lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
"Tai Kuda",
"Tikus Kentut",
"Banteng Merah",
"Bajigur",
"Bakso Sumatra",
"Neymar Bogor",
"Christiano Rojali",
"Batagor",
"Seblak Kalimantan",
"Macan Putih",
"Harimau Sumatra",
"Harimau Putih",
"Singa",
"Raja Iblis",
"Telur Betawi",
"Cilok Goreng",
])
const response = `
${monospace("CEK  KHODAM")}
- Nama: ${text}
- Khodam: ${khodam}
`
m.reply(response)
try {
let tek = `Khodam nya ${text}, adalah: ${khodam}`
azrezry.sendMessage(m.chat, {
      audio: { url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${tek}&key=YoriChan&voice=adam` }, 
      mimetype: 'audio/mpeg', 
      ptt: true
    }, { quoted: m });
  } catch (err) {
    console.error(err);
}
}
break

case 'addprem':{
	if (!isCreator) return reply(mess.OnlyOwner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await azrezry.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'delprem':
	if (!isCreator) return reply(mess.OnlyOwner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await azrezry.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}
break

case 'cekprem': case'cekpremium':
if (!isPremium) return reply(`Kamu bukan user premium, chat owner buat beli premium`)
if (isCreator) return reply(`Khusus user aja bkn untuk owner`)
if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return reply(`PERMANENT`)
let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
reply(premiumnya)
break
case 'listpremium': case'listprem':
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = ms(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
azrezry.sendTextWithMentions(m.chat, txt, m)
break

case 'welcome':
            case 'left': {
           if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
               if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !IsCreator) return reply('Fitur Khusus admin!')
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`${command} is disabled`)
               }
            }
            break
case 'addcase': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return m.reply(`Contoh: ${prefix+command} case nya`);
const namaFile = path.join(__dirname, 'message.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan case baru:');
console.log(caseBaru);
return m.reply('Sukses menambahkan case!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'delcase': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return m.reply(`Contoh: ${prefix+command} nama case`);
const fs = require('fs').promises;
async function dellCase(filePath, caseNameToRemove) {
try {
let data = await fs.readFile(filePath, 'utf8');
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
if (data === modifiedData) {
m.reply('Case tidak ditemukan atau sudah dihapus.');
return;
}
await fs.writeFile(filePath, modifiedData, 'utf8');
m.reply('Sukses menghapus case!');
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}}
dellCase('./message.js', q);
break;
}

case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await azrezry.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await azrezry.imgToSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await azrezry.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await azrezry.vidToSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await azrezry.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await azrezry.sendStickerFromUrl(from, media, m, {packname: global.packname, author: global.author })
await fs.unlinkSync(media)
} else reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
break

case 'addlist':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
	let media = await azrezry.downloadAndSaveMediaMessage(quoted)
	const fd = new FormData();
	fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
	fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: fd
		}).then(res => res.json())
		.then((json) => {
			addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
			reply(`Sukses set list message dengan key : *${args1}*`)
			if (fs.existsSync(media)) fs.unlinkSync(media)
		})
} else {
	addResponList(m.chat, args1, args2, false, '-', db_respon_list)
	reply(`Sukses set list message dengan key : *${args1}*`)
}
break
//=========================\\
case 'dellist':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
//=========================\\
case 'updatelist': case 'update':
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
	let media = await azrezry.downloadAndSaveMediaMessage(quoted)
	const fd = new FormData();
	fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
	fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: fd
		}).then(res => res.json())
		.then((json) => {
			updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
			reply(`Sukses update respon list dengan key *${args1}*`)
			if (fs.existsSync(media)) fs.unlinkSync(media)
		})
} else {
	updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
	reply(`Sukses update respon list dengan key *${args1}*`)
}
break

case 'play':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
    if (!text) throw `*• Contoh :* ${usedPrefix + command} *[judul lagu]*`;
    m.reply("Sedang mencari...");
    let search = await ytdl.search(text);
    let result = search.data[0];
    azrezry.sendMessage(
      m.chat,
      {
        audio: {
          url: await (await ytdl.mp3(result.url)).media,
        },
        mimetype: "audio/mp4",
        contextInfo: {
          externalAdReply: {
            title: result.title,
            body: result.author.name,
            mediaType: 1,
            thumbnailUrl: result.img,
            renderLangerThumbnail: true,
          },
        },
      },
      {
        quoted: m,
      },
    );
  }
break

case 'creator':
case 'owner': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
	await azrezry.sendMessage(m.chat, {
		react: {
			text: "⏳",
			key: m.key,
		}
	})
	let img = "https://telegra.ph/file/d5cc0bd3fae79436e1c07.jpg"
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: azrezry.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`HAI KAK ${pushname}\nINI OWNER KU YAA JNGAN DI SPAM`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*MY OWNER azrezry*\n*OVERSEAR*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👤 OWNER","url":"https:\\/\\/wa.me\\/6285710699483?text=Halo+owner","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `> *CHANEL azrezryShre*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👥 GRUP ETMIN","url":"https://whatsapp.com/channel/0029VakTtLD9MF94Un9kgJ29","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await azrezry.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break

case 'pin': case 'pinterest': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
azrezry.sendMessage(from, {react: {text: "🧐", key: m.key}})
if (!text) return reply(`*Example*: ${prefix + command} azrezryShre`)
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: azrezry.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image dari ${text}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: 'azrezryShre'
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY CHANEL OWNER","url":"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k,"merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'By azrezryShre'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await azrezry.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break


case 'qc': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!quoted){
const getname = await azrezry.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
azrezry.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
azrezry.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break


case 'hdimg':
case 'hdr': 
case 'remini': case 'hd': case 'hdr': { 
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
let q = m.quoted;
  if (!q) {
    return reply(`*[ ⚠️ ] Usage*\n${prefix + command} <reply to an image>\n\n*HANYA BISA REPLY*`);
  }
  let mime = (q.msg || q).mimetype || '';
  if (!mime.startsWith('image/')) {
    return reply(`*[ ⚠️ ] Usage*\n${prefix + command} <reply to an image>\n\n*HANYA BISA REPLY*`);
  }
try{
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
azrezry.sendMessage(m.chat, { image: proses, caption:'\n> Sukses'})
}catch (error) {
m.reply('erorr')
}}
break

case "donasi": {
	const text12 = `HALLO KAK @${sender.split("@")[0]}

*• DANA  : 628xxxxx*
*• GOPAY : 628xxxxx*
*• OVO.   : 628xxxxx*
*• QRIS.   : MINTA OWNER*

TERIMAKASIH ATAS DONASI NYA
`
	azrezry.sendMessage(m.chat, {
		text: text12,
		gifPlayback: true,
		contextInfo: {
			externalAdReply: {
				showAdAttribution: true,
				title: global.namabot,
				body: "azrezry ᴍᴅ",
				thumbnailUrl: kambing,
				sourceUrl: syt,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	})
}
break



case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
azrezry.downloadAndSaveMediaMessage(quoted, "gifee")
azrezry.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await azrezry.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await azrezry.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break


case 'ban': case 'banned': {
if (!isCreator) return reply(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/Reply Target Yang Mau Di ${command}`)
banned.push(users)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
azrezry.sendTextWithMentions(m.chat, `Succes banned @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Banned`)
}
}
break
//========================
case 'unban': case 'unbanned': {
if (!isCreator) return reply(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/Reply Target Yang Mau Di ${command}`)
let anu = banned.indexOf(users)
banned.splice(anu, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
azrezry.sendTextWithMentions(m.chat, `Succes Unbanned @${users.split('@')[0]}`, m)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Un-Banned`)
}
}
break
 //=========================================\\
 case 'listban': case 'listbanned': {
let txt = `*LIST DIBANNED*\n*Total :* *${banned.length}* Di-banned\n\n`
for (let blk of banned) {
txt += `*•* @${blk.split('@')[0]}\n`
}
azrezry.sendTextWithMentions(m.chat, txt, m)
}
break

case 'kick': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply('Bot Bukan Admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await azrezry.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply('Sukses kick target☑️')).catch((err) => reply('Tag/reply pesan target yang ingin di kick!'))
}
break

case 'afk':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
if (!m.isGroup) return reply('Fitur Group')
if (isAfkOn) return reply('Afk sudah diaktifkan sebelumnya')
let reason = text ? text : 'Tanpa Alasan'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
azrezry.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
}
break

case 'apakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break

case 'bucincek': case 'cekbucin': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka bucin deh><','60% Hai Cewek Bucin🐊','70% Hai Ukhty Bucin🐊','62% Kakak Buncin Deh><','74% Kakak ni Bucin Bgt deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:) Ngk Ada Bucin Nya','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Byak Cowok Bucin Bngt Iya Kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break





case 'menuall':
case 'allmenu': {
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
let anu = `
\`MENU GAME\`
> ᴛᴇʙᴀᴋᴋᴀᴛᴀ 
> ꜱᴜꜱᴜɴᴋᴀᴛᴀ 
> ᴋᴜɪꜱ
> ꜱɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
> ᴀꜱᴀʜᴏᴛᴀᴋ
> ꜰᴀᴍɪʟʏ100
> ᴛᴇʙᴀᴋᴋɪᴍɪᴀ
> ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ

\`MENU OWNER\`
> ᴀᴅᴅᴄᴀꜱᴇ 
> ᴅᴇʟᴄᴀꜱᴇ
> ᴍɪɴʙᴀʟᴀɴᴄᴇ
> ᴀᴅᴅʙᴀʟᴀɴᴄᴇ 
> ᴘᴜʙʟɪᴄ 
> ꜱᴇʟꜰ

\`MENU FUN\`
> ᴛᴏᴘɢʟᴏʙᴀʟ 
> ʙᴀʟᴀɴᴄᴇ
> ᴀᴅᴅʟɪꜱᴛ
> ᴅᴇʟʟɪꜱᴛ
> ᴜᴘᴅᴀᴛᴇʟɪꜱᴛ

\`MENU GROUP\`
• ᴘʟᴀʏ 
• ꜱᴛɪᴄᴋᴇʀ
• ᴡᴇʟᴄᴏᴍᴇ
• ʟᴇꜰᴛ 
• ᴄᴇᴋᴋʜᴏᴅᴀᴍ 
• ʜɪᴅᴇᴛᴀɢ 
• ʙᴜᴋᴀ 
• ᴛᴜᴛᴜᴘ  
• ᴀᴅᴅᴘʀᴇᴍ
• ʟɪꜱᴛᴘʀᴇᴍ
• ᴅᴇʟᴘʀᴇᴍ
• ᴄᴇᴋᴘʀᴇᴍ
• ᴘʀᴏᴍᴏᴛᴇ 
• ᴅᴇᴍᴏᴛᴇ
• owner
• pinterest 
• swm
• donasi
• kick 
• cekbucin
• apakah 
• afk
• qc
• hd
> 
`
azrezry.sendMessage(m.chat, {
text: anu,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
		externalAdReply: {  
title: `ᴀᴢʀᴇᴢʀʏ ꜱʜᴀʀᴇ`, 
body: '',
thumbnailUrl: 'https://telegra.ph/file/d8a0e145bebc9b6d1c162.jpg',
sourceUrl: 'https://www.youtube.com/@CallMyKyy', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
await azrezry.sendMessage(m.chat, {audio: fs.readFileSync('./lib/menu.mp3'), mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break

case 'menuowner':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
let anu = `*\`Feature Developer\`*
• ᴀᴅᴅᴄᴀꜱᴇ 
• ᴅᴇʟᴄᴀꜱᴇ
• ꜱᴇʟꜰ 
• ᴘᴜʙʟɪᴄ 
• ᴀᴅᴅʙᴀʟᴀɴᴄᴇ 
• ᴍɪɴʙᴀʟᴀɴᴄᴇ
`
reply(anu)
}
break

case 'menugrup':
case 'menugroup':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
let anu = `*\`Feature Group\`*
• ᴘʟᴀʏ 
• ꜱᴛɪᴄᴋᴇʀ
• ᴡᴇʟᴄᴏᴍᴇ
• ʟᴇꜰᴛ 
• ᴄᴇᴋᴋʜᴏᴅᴀᴍ 
• ʜɪᴅᴇᴛᴀɢ 
• ʙᴜᴋᴀ 
• ᴛᴜᴛᴜᴘ  
• ᴀᴅᴅᴘʀᴇᴍ
• ʟɪꜱᴛᴘʀᴇᴍ
• ᴅᴇʟᴘʀᴇᴍ
• ᴄᴇᴋᴘʀᴇᴍ
• ᴘʀᴏᴍᴏᴛᴇ 
• ᴅᴇᴍᴏᴛᴇ
• owner
• pinterest 
• swm
• donasi
• kick 
• cekbucin
• apakah 
• afk
• qc
• hd
`
reply(anu)
}
break

case 'menufun':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
let anu = `*\`Feature Fun\`*
• ᴀᴅᴅʟɪꜱᴛ
• ᴅᴇʟʟɪꜱᴛ
• ᴜᴘᴅᴀᴛᴇʟɪꜱᴛ
• ᴛᴏᴘɢʟᴏʙᴀʟ 
• ʙᴀʟᴀɴᴄᴇ
`
reply(anu)
}
break

case 'menugame':{
if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
let anu = `*\`Feature Game\`*
• ꜱᴜꜱᴜɴᴋᴀᴛᴀ 
• ᴛᴇʙᴀᴋᴋᴀᴛᴀ 
• ᴀꜱᴀʜᴏᴛᴀᴋ 
• ᴛᴇʙᴀᴋᴋɪᴍɪᴀ 
• ꜰᴀᴍɪʟʏ100 
• ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ 
• ᴋᴜɪꜱ 
• ꜱɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
`
reply(anu)
}
break


case 'menu':
case 'azrezry':
 {
 if (isBan) return m.reply(`*Lu Di Ban Kocak Awokwok*`) 
   let anu = `
> *乂 INFO BOT*
ɴᴀᴍᴀ   : ᴀᴢʀᴇᴢʀʏ ꜱʜᴀʀᴇ
ᴏᴡɴᴇʀ  : ᴀᴢʀᴇᴢʀʏ
ᴠᴇʀꜱɪ   : ᴠ 0.1.1

> *乂 COMMAND MENU*
• allmenu
• menuowner
• menugame
• menugroup
• menufun

${readmore}
ɪɴꜰᴏ ʟᴇʙɪʜ ʟᴇɴɢᴋᴀᴘ ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ 
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: anu
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./lib/kambing.png`)}, { upload: azrezry.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"List Menu ⎙",
"sections":[{"title":"azrezry List Feature",
"highlight_label": "Favorite Request",
"rows":[{"header":"",
"title":"MENU ALL",
"description":"For See All Feature",
"id":"${prefix}allmenu"},
{"header":"",
"title":"MENU DEVELOPER",
"description":"For See Developer Feature",
"id":"${prefix}menuowner"},
{"header":"",
"title":"MENU GROUP",
"description":"For See Group Feature",
"id":"${prefix}menugroup"},
{"header":"",
"title":"MENU GAME",
"description":"For See Game Feature",
"id":"${prefix}menugame"},
{"header":"",
"title":"MENU FUN",
"description":"For See Fun Feature",
"id":"${prefix}menufun"}]
}]
}`
         },
{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"CHAT OWNER","url":"https://wa.me/+${global.owner}?text=Halo+Bang","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363319981264645@newsletter',
newsletterName: `Channel ${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await azrezry.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
await azrezry.sendMessage(m.chat, {audio: fs.readFileSync('./lib/menu.mp3'), mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break



//===================[ BATAS CASE ]=====================\\
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
