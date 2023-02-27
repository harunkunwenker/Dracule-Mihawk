/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//===> SESUAIKAN DENGAN KEBUTUHAN MU
global.ownerNumber = ['6285602502254','6285602502254'] //Ganti Jadi Nomer mu Biar Fitur Ownernya Bisa Dipake
global.Rowner = '6285602502254' //Owner Utama
global.ownerName = 'ᴛᴇᴀᴍɪᴍᴏᴜᴛᴏ' //Ganti Jadi Namamu
global.packname = 'ʙᴏᴛᴡᴇᴀ' //Ganti Jadi Nama Botmu
global.author = 'ᴛᴇᴀᴍɪᴍᴏᴜᴛᴏ⁩' //Ganti Jadi Namamu
global.prefa = ['','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi' //Saran Gausah Diganti Lagi
global.webme = 'https://waifuplay.app/' //Ganti Jadi Bebas Web Sosmed Mu
global.sosmed = 'https://github.com/harunkunwenker?tab=repositories' //Ganti Jadi Web Sosmed Mu

//====> SARAN GAUSAH DIGANTI SIH DAH PAS SEMUA
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.multiplier = 69 // Semakin Tinggi Nilai nya Semakin Sulit Naik Level
global.limitEnd = 'Limit Kamu Telah Habis Silahkan Buy Di Shop Atau Tunggu Sampai Limit Reset'
global.fiturOff = '❎ Fitur Tidak Diaktifkan'
global.fiturError = 'Fitur Sedang Error ❎'

//===> BOT SETTINGS
global.autobackup = true //Ganti Ke false Kalau Gamau Di Kirimin File Setiap Hari
global.autoread = false //Ganti ke false kalau gamau smua chat di read sama bot
global.autotyping = true //Ganti ke false kalau gamau auto mengetik kalau ada chat masuk ke wa bot
global.available = false //Ganti ke true kalau pengen bot nya keliatan online terus
global.autolevelup = false //Ganti ke false klo gamau ada peningkatan exp user mu

//===> SESUAIKAN DENGAN KEBUTUHAN MU 
global.mess = {
admin: '*Kamu Bukan Admin!*',
botAdmin: '*Bot Bukan Admin!*',
botOwner: '*Kamu Bukan Ownerku!*',
group: '*Khusus Group Chat!*',
private: '*Khusus Private Chat!*',
wait: '*Tunggu Sebentar Lagi Diproses....*',
done: '*Selesai!*',
prem: '*Khusus User Premium!*'
}

//===> KALAU GANTI FOTO GANTI JUGA NAMA NYA
global.thumb = fs.readFileSync('./media/ichi.jpg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')
global.doc = fs.readFileSync('./media/ichi.pdf')

//===> UCAPAN WELCOME AND LEAVE
global.quotes = {
welcome: '*Melanggar Rules = Abu-abu*',
leave: '*Beban Group Berkurang* :v'
}

//===> QUOTES SETIAP MENU
global.quotes1 = 'Apabila Akal Tidak Sempurna Maka Kurangilah Berbicara. ~Ali Bin Abi Thalib'
global.quotes2 = 'Orang Yang Suka Berkata Jujur Mendapatkan Tiga Hal, Yakni Kepercayaan, Cinta, dan Rasa Hormat. ~Ali Bin Abi Thalib'
global.quotes3 = 'Balas Dendam Terbaik Adalah Menjadikan Dirimu Lebih Baik. ~Ali Bin Abi Thalib'

//===> TIPS BAGIAN MENU
global.tips1 = 'Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam 🚀'
global.tips2 = 'Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG ⚔️'
global.tips3 = 'Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik *.req/lapor Laporannya* 👮'
global.tips4 = 'Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia 🕹️'
global.tips5 = 'Jika Kamu Ingin Mendownload Video Youtube, Cukup Ketik *.ytmp4 linknya* 📥'

//===> UBAH EMOJI RPG DISINI
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

//===> JANGAN DI HAPUS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
