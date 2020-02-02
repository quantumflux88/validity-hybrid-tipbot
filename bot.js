const { initialiseTelegram }  = require('./telegram.js');
const { initialiseDatabase }  = require('./wallet.js');
const { initialiseDiscord }  = require('./discord.js');

var serviceAccount = require("./serviceFile.json");
const admin = require("firebase-admin");

const discordToken = "";
const telegramToken = "991661595:AAGxfyxXTO8JAcFg1AsGDDiBoKQ8sLOwGoc";
const firebaseAuth = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: "991661595:AAGxfyxXTO8JAcFg1AsGDDiBoKQ8sLOwGoc",
  authDomain: "quantumflux.space/qffbot/",
  databaseURL: "https://quantumflux.space/qffbot",
  projectId: "qffbot",
  storageBucket: "gs://quantumfluxfield.appspot.com",
  messagingSenderId: "1056611309953",
  appId: "1:1056611309953:web:a6c4bc3788b57ff5348b6c",
};

initialiseServer = async() => {
  console.log("Initialising Firebase...")
  await initialiseDatabase(firebaseAuth);
  console.log("Initialising Telegraf...")
  await initialiseTelegram(telegramToken);
  console.log("Initialising Discord.js...")
  await initialiseDiscord(discordToken);
  console.log("The bot is alive!")
}

initialiseServer();
