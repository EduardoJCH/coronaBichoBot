const TelegramBot = require( "node-telegram-bot-api" );
const token = '12345678910:sdfasiwueiwueiuwehfuiwe'
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, "Bienvenido", {
"reply_markup": {
    "keyboard": [["hola", "bye"], ["video","musica"],["fallecidos Perú"]]
    }
});
});
//Respuestas
bot.on('message', (msg) => {
var Hi = "hola";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hola");
    bot.sendPhoto(msg.chat.id,"../img/coronavirus.png");
}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Bye amiguito");
}
var vid = "video";
if (msg.text.indexOf(vid) === 0) {
    bot.sendMessage(msg.chat.id, "Coronavairus!!!");
    bot.sendVideo(msg.chat.id,"../img/Coronavairus.mp4")
}
var mus= "musica";
if (msg.text.indexOf(mus) === 0) {
    bot.sendMessage(msg.chat.id, "Ahora baila este rico cumbión");
    bot.sendAudio(msg.chat.id,"../img/Coronavairus.mp3")
}
var fall= "fallecidos";
if (msg.text.indexOf(fall) === 0) {
    bot.sendMessage(msg.chat.id, "Fallecidos por coronavirus en el Perú");
    bot.sendPhoto(msg.chat.id,"../img/fallecidos.png");
}
});
