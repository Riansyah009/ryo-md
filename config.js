/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'Ryan-Key' // LOLHUMAN
global.ibeng = 'tamvan' // FREE APIKEY IBENG
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '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' // https://platform.openai.com/account/api-keys

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'ʀʏᴏ-ᴍᴅ'
global.namaowner = 'om iyan'
global.wagc = "https://chat.whatsapp.com/HkIAtlbjObD3OlrVj7RlVa"

//—————「 Setting Owner 」—————//
global.owner = ['6282253969170']
global.nomerowner = '6282253969170'
global.premium = ['6282253969170']

//—————「 Set Wm 」—————//
global.packname = 'ᴋᴏɴᴇᴋᴏ-ᴍᴅ'
global.author = 'Bot: +6282253969170\nInstagram: fake_iyanxsy'
global.prefa = ['', '.']
global.sp = '女'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Kamu orang kesayangan ryo, jadi gak pake limit>\\<",
    free: 100
}

//—————「 Set Image 」—————//
global.imageurl = 'https://i.ibb.co/TvRPV8k/hutod.jpg'
global.link = 'https://sociabuzz.com/rianananta'
global.thumb = fs.readFileSync('./media/koneko.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
